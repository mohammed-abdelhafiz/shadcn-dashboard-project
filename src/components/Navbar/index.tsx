import Link from "next/link";

import { ModeToggle } from "./ToggleMode";
import { UserMenu } from "./UserMenu";
import { SidebarTrigger } from "../ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 z-50 bg-background/90">
      {/* Left */}
      <SidebarTrigger />
      {/* Right */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Link href="/users" className="hover:underline hover:text-primary text-sm">Users</Link>
          <Link href="/payments" className="hover:underline hover:text-primary text-sm">Payments</Link>
        </div>
        <ModeToggle />
        <UserMenu />
      </div>
    </nav>
  );
};
