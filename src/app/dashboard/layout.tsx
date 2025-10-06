import * as React from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Settings,
  HelpCircle,
  LifeBuoy,
  MessageSquareQuestion,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
  { href: "/options", icon: Settings, label: "Options" },
  { href: "/help", icon: HelpCircle, label: "Help" },
  { href: "/support", icon: LifeBuoy, label: "Support" },
  { href: "/faq", icon: MessageSquareQuestion, label: "FAQ" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary">
              <LayoutGrid className="size-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold font-headline bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text">
              SmartOps
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton tooltip={item.label}>
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/login" legacyBehavior passHref>
                <SidebarMenuButton tooltip="Log Out">
                  <LogOut />
                  <span>Log Out</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-2 border-b">
           <SidebarTrigger />
           <div />
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
