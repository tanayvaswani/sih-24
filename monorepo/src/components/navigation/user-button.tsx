import { UserRound } from "lucide-react";

const UserButton = () => {
  return (
    <div className="inline-flex items-center justify-center p-2.5 rounded-full bg-neutral-50 border shadow-sm hover:opacity-90 hover:cursor-pointer">
      <UserRound className="h-5 w-5 text-black" />
    </div>
  );
};

export default UserButton;
