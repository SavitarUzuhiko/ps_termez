
import { FcIdea } from "react-icons/fc";
import { GiCommercialAirplane, GiSoccerBall } from "react-icons/gi";
import { IoColorPaletteSharp, IoLibrarySharp } from "react-icons/io5";
import { RiCalendarEventFill } from "react-icons/ri";

const categories = [
  { name: "Creativity and Innovation", slug: "creative", icon: FcIdea },
  { name: "Sports", slug: "sport", icon: GiSoccerBall },
  { name: "Student Travel", slug: "travel", icon: GiCommercialAirplane },
  {
    name: "Clubs and Co-curricular",
    slug: "club",
    icon: IoColorPaletteSharp,
  },
  { name: "Special Events", slug: "event", icon: RiCalendarEventFill },
  { name: "Library", slug: "library", icon: IoLibrarySharp },
];

export default categories;