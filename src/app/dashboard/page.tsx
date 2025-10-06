"use client"

import { Zap, Factory, Droplets, Wind, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const metrics = [
    {
      title: "Energy Consumption",
      value: "721 kWh",
      change: "+2.1%",
      changeType: "increase" as "increase" | "decrease",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
          <Zap className="h-6 w-6 text-white" />
        </div>
      ),
      description: "Total energy used this month",
      cardColor: "hsl(45 90% 95%)",
      borderColor: "hsl(38 92% 50%)"
    },
    {
      title: "CO2 Emissions",
      value: "3.4 tons",
      change: "-0.5%",
      changeType: "decrease" as "increase" | "decrease",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg">
          <Factory className="h-6 w-6 text-white" />
        </div>
      ),
      description: "Carbon footprint from operations",
      cardColor: "hsl(220 10% 95%)",
      borderColor: "hsl(220 5% 50%)"
    },
    {
      title: "Water Usage",
      value: "1.2M L",
      change: "+1.2%",
      changeType: "increase" as "increase" | "decrease",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg">
          <Droplets className="h-6 w-6 text-white" />
        </div>
      ),
      description: "Total water consumption",
      cardColor: "hsl(220 90% 95%)",
      borderColor: "hsl(221 83% 53%)"
    },
    {
      title: "Air Pollution",
      value: "42 AQI",
      change: "-3.0%",
      changeType: "decrease" as "increase" | "decrease",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg">
          <Wind className="h-6 w-6 text-white" />
        </div>
      ),
      description: "Air Quality Index (particulates)",
      cardColor: "hsl(0 90% 95%)",
      borderColor: "hsl(0 84% 60%)"
    },
  ];

  return (
    <div className="p-8 bg-background flex-1 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="scale(0.5) rotate(45)">
              <path d="M40 0 C50 10 50 30 40 50 C30 70 30 90 40 100 C50 90 70 70 80 50 C70 30 70 10 40 0Z" fill="hsl(var(--primary)/0.04)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)"/>
        </svg>
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

        <h2 className="text-4xl font-bold font-headline tracking-tight mb-8 mt-4">Sensor Parameters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10">
        {metrics.map((metric) => (
          <Card key={metric.title} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg border-l-8 flex flex-col justify-center text-center p-6"
            style={{ 
              borderColor: metric.borderColor,
              backgroundColor: metric.cardColor
            }}>
            <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-2">
              {metric.icon}
              <CardTitle className="text-xl font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <div className="text-4xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground pt-1">{metric.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-center text-sm p-2">
              {metric.changeType === 'increase' ? (
                <ArrowUpRight className="h-4 w-4 text-destructive" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-primary" />
              )}
              <span className={`ml-1 ${metric.changeType === 'increase' ? 'text-destructive' : 'text-primary'}`}>{metric.change}</span>
              <span className="ml-1 text-muted-foreground text-xs">from last month</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
