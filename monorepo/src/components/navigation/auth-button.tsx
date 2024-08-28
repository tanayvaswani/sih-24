import { LogIn } from "lucide-react";

import { Button } from "../ui/button";

const AuthButton = () => {
  return (
    <Button>
      Sign In <LogIn className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default AuthButton;
