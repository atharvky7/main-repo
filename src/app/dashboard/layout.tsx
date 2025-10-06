import * as React from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Settings,
  HelpCircle,
  LifeBuoy,
  MessageSquareQuote,
  LogOut,
  Menu,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav className="flex w-full flex-row items-center gap-5 text-sm font-medium lg:gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
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
              className="size-6 text-primary"
            >
              <path d="M12 22c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8z" />
              <path d="M12 2a10 10 0 0 0-10 10c0 4.42 3.58 8 8 8" />
              <path d="M12 22a10 10 0 0 1 10-10c0-4.42-3.58-8-8-8" />
            </svg>
            <h1 className="text-xl font-bold font-headline bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text">
              SmartOps
            </h1>
            <span className="sr-only">SmartOps</span>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-5">
            {menuItems.map((item) => (
               <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
            ))}
          </div>

          <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {menuItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                       <Link href={item.href}>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <Link href="/login">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log Out</span>
              </Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  )
}
