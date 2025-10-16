import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="h-14 border-b border-border bg-card flex items-center px-4">
            <SidebarTrigger />
            <div className="ml-4 flex items-center justify-between flex-1">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm text-muted-foreground">System Active</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Pilot Phase • General Surgery
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
