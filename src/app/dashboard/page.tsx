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
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "Total energy used this month",
    },
    {
      title: "CO2 Emissions",
      value: "3.4 tons",
      change: "-0.5%",
      changeType: "decrease" as "increase" | "decrease",
      icon: <Factory className="h-8 w-8 text-gray-500" />,
      description: "Carbon footprint from operations",
    },
    {
      title: "Water Usage",
      value: "1.2M L",
      change: "+1.2%",
      changeType: "increase" as "increase" | "decrease",
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      description: "Total water consumption",
    },
    {
      title: "Air Pollution",
      value: "42 AQI",
      change: "-3.0%",
      changeType: "decrease" as "increase" | "decrease",
      icon: <Wind className="h-8 w-8 text-green-500" />,
      description: "Air Quality Index (particulates)",
    },
  ];

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/40">
      {metrics.map((metric) => (
        <Card key={metric.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-l-4 flex flex-col justify-center text-center"
          style={{ borderLeftColor: metric.changeType === 'decrease' && (metric.title === 'CO2 Emissions' || metric.title === 'Air Pollution') ? 'hsl(var(--primary))' : (metric.changeType === 'increase' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))') }}>
          <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-2">
            {metric.icon}
            <CardTitle className="text-xl font-medium">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold">{metric.value}</div>
            <p className="text-sm text-muted-foreground pt-2">{metric.description}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-center text-md">
            {metric.changeType === 'increase' ? (
              <ArrowUpRight className="h-5 w-5 text-destructive" />
            ) : (
              <ArrowDownRight className="h-5 w-5 text-primary" />
            )}
            <span className={`ml-1 ${metric.changeType === 'increase' ? 'text-destructive' : 'text-primary'}`}>{metric.change}</span>
            <span className="ml-1 text-muted-foreground">from last month</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
