import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed z-100 w-full bg-black/30 h-32 md:h-48 border-b backdrop-blur-sm px-6 md:px-0">
      <div className="flex items-center justify-between py-4 md:max-w-screen-xl md:mx-auto">
        <Link href={"/"} className="text-2xl font-semibold hover:opacity-90">
          xT24
        </Link>

        <div>
          {/* <CommandKSearch /> */}
          {/* <AuthButton /> */}
          {/* <UserProfile /> */}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
