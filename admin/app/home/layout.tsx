import { AppSidebar } from "@/components/sidebar/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full flex min-h-screen bg-muted p-4 gap-4 bg-white">
        
        {/* Sidebar */}

          <AppSidebar />


        {/* Conteúdo principal */}
        <main className="flex-1 rounded-md border bg-background  p-4">
          <SidebarTrigger />
          {children}
        </main>

      </div>
    </SidebarProvider>
  )
}
