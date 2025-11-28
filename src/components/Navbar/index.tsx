import Link from "next/link";

import { ModeToggle } from "./ToggleMode";
import { UserMenu } from "./UserMenu";
import { SidebarTrigger } from "../ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left */}
      <SidebarTrigger />
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <ModeToggle />
        <UserMenu />
      </div>
    </nav>
  );
};
