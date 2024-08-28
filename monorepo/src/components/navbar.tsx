import { BarChart4Icon, BookKeyIcon, Home } from "lucide-react";
import Link from "next/link";
import AuthButton from "./navigation/auth-button";
import { CommandKSearch } from "./navigation/command-k-search";

const navRoutes = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Get Report",
    href: "/get-report",
    icon: BarChart4Icon,
  },
  {
    title: "Institute Info",
    href: "/institute-info",
    icon: BookKeyIcon,
  },
];

const Navbar = () => {
  return (
    <div className="fixed z-100 w-full bg-black/30 h-32 md:h-48 border-b backdrop-blur-sm px-6 md:px-0 flex flex-col items-start justify-between">
      <div className="flex items-center justify-between py-4 md:max-w-screen-xl md:mx-auto w-full">
        <Link href={"/"} className="text-2xl font-semibold hover:opacity-90">
          LogoIpsum
        </Link>

        <div className="flex items-center gap-4">
          <CommandKSearch />
          <AuthButton />
          {/* <UserProfile /> */}
        </div>
      </div>

      <div className="h-12 w-full flex items-center justify-start gap-12 md:max-w-screen-xl md:mx-auto">
        {navRoutes.map((route) => (
          <Link
            key={route.title}
            href={route.href}
            className="flex items-center justify-center h-full gap-2 hover:text-blue-300 transition-all duration-200"
          >
            <route.icon className="h-4 w-4" />

            <span className="">{route.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
