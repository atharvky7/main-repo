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
    },
    {
      title: "Air Pollution",
      value: "42 AQI",
      change: "-3.0%",
      changeType: "decrease" as "increase" | "decrease",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500 shadow-lg">
          <Wind className="h-6 w-6 text-white" />
        </div>
      ),
      description: "Air Quality Index (particulates)",
    },
  ];

  return (
    <div className="p-8 bg-background flex-1 flex flex-col items-center">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-8 mt-4">Sensor Parameters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {metrics.map((metric) => (
          <Card key={metric.title} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg border-l-4 flex flex-col justify-center text-center p-4"
            style={{ borderLeftColor: metric.changeType === 'decrease' && (metric.title === 'CO2 Emissions' || metric.title === 'Air Pollution') ? 'hsl(var(--primary))' : (metric.changeType === 'increase' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))'), backgroundColor: 'hsl(var(--card))' }}>
            <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-2">
              {metric.icon}
              <CardTitle className="text-lg font-medium">{metric.title}</CardTitle>
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
