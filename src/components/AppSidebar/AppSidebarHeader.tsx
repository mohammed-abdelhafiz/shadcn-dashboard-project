import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../ui/sidebar";
import Link from "next/link";
export const AppSidebarHeader = () => {
  return (
    <SidebarHeader className="py-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/">
              <Avatar className="size-6">
                <AvatarImage src="https://avatars.githubusercontent.com/u/244142233" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <span className="ml-1">Mo Atia</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
