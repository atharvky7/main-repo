import * as React from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Settings,
  HelpCircle,
  LifeBuoy,
  MessageSquareQuote,
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
  { href: "/faq", icon: MessageSquareQuote, label: "FAQ" },
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6 text-sidebar-primary"
            >
              <path d="M12 22c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z" />
              <path d="M12 2a10 10 0 0 0-10 10c0 4.42 3.58 8 8 8" />
              <path d="M12 22a10 10 0 0 1 10-10c0-4.42-3.58-8-8-8" />
            </svg>
            <h1 className="text-xl font-bold font-headline bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text">
              SmartOps
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild tooltip={item.label} size="lg">
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Log Out" size="lg">
                <Link href="/login">
                  <LogOut />
                  <span>Log Out</span>
                </Link>
              </SidebarMenuButton>
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
