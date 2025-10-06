"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, User, Zap, Factory, Droplets, Wind, ArrowUpRight, ArrowDownRight, Home, Settings, HelpCircle, Info, Leaf, LifeBuoy } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar"

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, you would clear session/token here
    router.push("/login")
  }

  const metrics = [
    {
      title: "Energy Consumption",
      value: "721 kWh",
      change: "+2.1%",
      changeType: "increase" as "increase" | "decrease",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      description: "Total energy used this month",
    },
    {
      title: "CO2 Emissions",
      value: "3.4 tons",
      change: "-0.5%",
      changeType: "decrease" as "increase" | "decrease",
      icon: <Factory className="h-6 w-6 text-gray-500" />,
      description: "Carbon footprint from operations",
    },
    {
      title: "Water Usage",
      value: "1.2M L",
      change: "+1.2%",
      changeType: "increase" as "increase" | "decrease",
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      description: "Total water consumption",
    },
    {
      title: "Air Pollution",
      value: "42 AQI",
      change: "-3.0%",
      changeType: "decrease" as "increase" | "decrease",
      icon: <Wind className="h-6 w-6 text-green-500" />,
      description: "Air Quality Index (particulates)",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-primary font-headline">
                SmartOps
              </h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard">
                    <Home />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/options">
                    <Settings />
                    Options
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/help">
                    <HelpCircle />
                    Help
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/support">
                    <LifeBuoy />
                    Support
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/faq">
                    <Info />
                    FAQ
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="User avatar" />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium leading-none">Test User</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      test@example.com
                    </p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mb-2" align="end" forceMount>
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
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 md:justify-end">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text font-headline md:hidden">
              SmartOps
            </h1>
            <div>{/* This space can be used for other header items if needed */}</div>
          </header>
          <main className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 bg-muted/40">
            <div className="grid flex-1 gap-6 md:grid-cols-2">
              {metrics.map((metric) => (
                <Card key={metric.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-l-4 flex flex-col justify-center"
                  style={{ borderLeftColor: metric.changeType === 'decrease' && (metric.title === 'CO2 Emissions' || metric.title === 'Air Pollution') ? 'hsl(var(--primary))' : (metric.changeType === 'increase' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))') }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    {metric.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center text-xs">
                    {metric.changeType === 'increase' ? (
                      <ArrowUpRight className="h-4 w-4 text-destructive" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-primary" />
                    )}
                    <span className={`ml-1 ${metric.changeType === 'increase' ? 'text-destructive' : 'text-primary'}`}>{metric.change}</span>
                    <span className="ml-1 text-muted-foreground">from last month</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
