import { Sidebar, SidebarSeparator } from "../ui/sidebar";
import { AppSidebarHeader } from "./AppSidebarHeader";
import { AppSidebarContent } from "./AppSidebarContent";
import { AppSidebarFooter } from "./AppSidebarFooter";

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <AppSidebarHeader />
      <SidebarSeparator/>
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
};
