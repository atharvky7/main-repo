"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, you would clear session/token here
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text font-headline">
            SmartOps
          </h1>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <Link href="/dashboard" className="text-foreground transition-colors hover:text-foreground/80">Home</Link>
            <Link href="/options" className="transition-colors hover:text-foreground/80">Options</Link>
            <Link href="/support" className="transition-colors hover:text-foreground/80">Help Support</Link>
            <Link href="/faq" className="transition-colors hover:text-foreground/80">FAQ</Link>
          </nav>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="User avatar" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Test User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  test@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to your Dashboard</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a blank page. You can start building your app here.
        </p>
      </main>
    </div>
  )
}
