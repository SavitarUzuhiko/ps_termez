React TypeScript Frontend Architecture with Redux Toolkit and RTK Query for School Management Systems
Project Structure and Architecture
Feature-Based Folder Structure
The most recommended approach for scalable React TypeScript applications is the feature-based structure, which groups all related code by business domain rather than by file type [ref: 0-3]. This approach offers several advantages:

Everything related to a feature lives in one place
Easier to scale and onboard new developers
Improves maintainability and readability
Encourages encapsulation and modularity
Recommended Project Structure:

src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── authAPI.ts
│   │   ├── store/
│   │   │   └── authSlice.ts
│   │   ├── types/
│   │   │   └── authTypes.ts
│   │   └── index.tsx
│   ├── students/
│   ├── courses/
│   ├── grades/
│   └── dashboard/
├── shared/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── hooks/
│   ├── store/
│   ├── types/
│   └── utils/
├── app/
│   ├── store.ts
│   └── hooks.ts
└── main.tsx
This structure aligns perfectly with how real-world applications evolve around features, not UI layers, making it easier to focus on solving problems within a specific domain without worrying about the rest of the app [ref: 0-3].

Redux Toolkit Store Configuration
Store Setup
The Redux store should be configured using configureStore from Redux Toolkit, which provides sensible defaults and includes useful middleware [ref: 0-0]:

// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { studentApi } from "../features/students/studentApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([studentApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
Typed Hooks
To ensure type safety throughout the application, create pre-typed versions of the useDispatch and useSelector hooks [ref: 0-0]:

// src/app/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
Redux Slices
Create feature-specific slices using createSlice for immutable state updates [ref: 0-4]:

// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user?: IUser | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    userInfo: (state, action: PayloadAction<{ user: IUser }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
  },
});

export const { logout, userInfo } = authSlice.actions;
export default authSlice.reducer;
RTK Query API Implementation
API Slice Configuration
RTK Query simplifies data fetching and caching by auto-generating React hooks based on API endpoints [ref: 0-1]. For school management systems, organize API slices by resource:

// src/features/students/studentApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/students",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Student"],
  endpoints: (builder) => ({
    // Query: Get all students
    getStudents: builder.query<Student[], void>({
      query: () => "",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Student" as const, id })),
              { type: "Student", id: "LIST" },
            ]
          : [{ type: "Student", id: "LIST" }],
    }),
    
    // Query: Get single student
    getStudent: builder.query<Student, string>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Student", id }],
    }),
    
    // Mutation: Create student
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (newStudent) => ({
        url: "",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: [{ type: "Student", id: "LIST" }],
    }),
    
    // Mutation: Update student
    updateStudent: builder.mutation<Student, { id: string; data: Partial<Student> }>({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, _error, { id }) =>
        result ? [{ type: "Student", id }, { type: "Student", id: "LIST" }] : [],
    }),
    
    // Mutation: Delete student
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Student", id: "LIST" }],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
Advanced RTK Query Features
RTK Query provides sophisticated caching and data synchronization capabilities essential for school management systems [ref: 0-1]:

Automatic caching: Prevents duplicate requests for the same data
Cache invalidation: Uses tags to automatically refetch data when related mutations occur
Optimistic updates: Allows UI to react immediately before server confirmation
Background refetching: Keeps data fresh with configurable intervals
Authentication and Protected Routes
Authentication Hook
Create a comprehensive authentication hook using React Context API [ref: 1-1]:

// src/features/auth/hooks/useAuth.tsx
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({ user, login, logout }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
Protected Routes Implementation
React Router v6 introduces the Outlet component for creating protected route patterns [ref: 1-2]:

// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
Route Configuration
Configure routes using React Router v6 with nested protected routes [ref: 1-1]:

// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./features/auth/hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="grades" element={<GradesPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
Role-Based Authorization
Implement role-based access control for different user types in school management systems [ref: 1-4]:

// src/components/RequireAuth.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";

interface RequireAuthProps {
  allowedRoles: string[];
}

export const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const { user } = useAuth();
  const location = useLocation();

  const hasRequiredRole = user?.roles?.some(role => 
    allowedRoles.includes(role)
  );

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
Form Handling and Validation
React Hook Form Integration
React Hook Form provides excellent TypeScript support and performance optimization for complex forms [ref: 2-1]:

// src/features/students/components/StudentForm.tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const studentSchema = yup.object().shape({
  firstName: yup.string().required("First name is required").min(2, "Too short"),
  lastName: yup.string().required("Last name is required").min(2, "Too short"),
  email: yup.string().required("Email is required").email("Invalid email"),
  studentId: yup.string().required("Student ID is required"),
  grade: yup.number().required("Grade is required").min(1).max(12),
});

type StudentFormData = yup.InferType<typeof studentSchema>;

export const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StudentFormData>({
    resolver: yupResolver(studentSchema),
  });

  const [createStudent] = useCreateStudentMutation();

  const onSubmit = async (data: StudentFormData) => {
    try {
      await createStudent(data).unwrap();
      reset();
    } catch (error) {
      console.error("Failed to create student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          {...register("firstName")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
      >
        {isSubmitting ? "Creating..." : "Create Student"}
      </button>
    </form>
  );
};
Advanced Form Patterns
For complex validation scenarios, implement custom validation patterns [ref: 2-3]:

// Custom validation with React Hook Form
const validateGradeLevel = (value: number, formValues: any) => {
  if (formValues.program === "elementary" && value > 5) {
    return "Elementary students cannot be in grades above 5";
  }
  return true;
};

// Usage in form
{...register("grade", {
  required: "Grade is required",
  validate: {
    gradeLevel: (value) => validateGradeLevel(value, getValues()),
  },
})}
Responsive Design with TailwindCSS
Educational Interface Patterns
Design responsive layouts optimized for educational applications using TailwindCSS utility classes [ref: 2-0]:

// src/components/StudentDashboard.tsx
export const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Grades</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Primary Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>
              {/* Assignment list */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              {/* Stats content */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
Mobile-First Approach
Implement mobile-first responsive design patterns for educational interfaces:

/* Mobile-first responsive utilities */
.responsive-grid {
  @apply grid grid-cols-1 gap-4;
  @apply sm:grid-cols-2 sm:gap-6;
  @apply lg:grid-cols-3 lg:gap-8;
}

.card-responsive {
  @apply bg-white rounded-lg shadow-sm p-4;
  @apply sm:p-6;
  @apply lg:p-8;
}

.text-responsive {
  @apply text-sm;
  @apply sm:text-base;
  @apply lg:text-lg;
}
Component Architecture Best Practices
Reusable Component Patterns
Create a comprehensive component library for school management interfaces:

// src/shared/components/DataTable.tsx
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  loading,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.title}
              </th>
            ))}
            <th className="relative px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {onEdit && (
                  <button
                    onClick={() => onEdit(item)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(item)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Error Boundary Implementation
Implement comprehensive error handling for production applications:

// src/shared/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-800">
                    Something went wrong
                  </h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
Production Deployment Considerations
Environment Configuration
Set up proper environment configuration for different deployment stages:

// src/config/environment.ts
export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  enableDevTools: import.meta.env.VITE_ENABLE_DEVTOOLS === 'true',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
};
Performance Optimization
Implement code splitting and lazy loading for better performance:

// src/App.tsx
import { lazy, Suspense } from 'react';

const StudentsPage = lazy(() => import('./features/students/StudentsPage'));
const CoursesPage = lazy(() => import('./features/courses/CoursesPage'));
const GradesPage = lazy(() => import('./features/grades/GradesPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/grades" element={<GradesPage />} />
      </Routes>
    </Suspense>
  );
}
This comprehensive architecture provides a solid foundation for building scalable, maintainable school management systems with React, TypeScript, Redux Toolkit, and RTK Query. The feature-based structure, combined with proper authentication, form handling, and responsive design patterns, ensures the application can grow and adapt to changing educational requirements while maintaining code quality and developer productivity.