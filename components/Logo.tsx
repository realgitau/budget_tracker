import { CreditCard} from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <CreditCard  className="stroke h-11 w-11 stroke-purple-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export default Logo;
