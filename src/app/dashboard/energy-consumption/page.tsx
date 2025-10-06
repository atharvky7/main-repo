import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const energyData = [
  {
    factory: "Alpha Manufacturing",
    location: "New York, USA",
    consumption: 540,
    change: "+5.2%",
    status: "High",
  },
  {
    factory: "Beta Productions",
    location: "London, UK",
    consumption: 320,
    change: "-2.1%",
    status: "Normal",
  },
  {
    factory: "Gamma Innovations",
    location: "Tokyo, Japan",
    consumption: 680,
    change: "+8.7%",
    status: "Critical",
  },
  {
    factory: "Delta Solutions",
    location: "Berlin, Germany",
    consumption: 210,
    change: "+1.5%",
    status: "Normal",
  },
  {
    factory: "Epsilon Works",
    location: "Sydney, Australia",
    consumption: 450,
    change: "-0.8%",
    status: "High",
  },
   {
    factory: "Zeta Fabricators",
    location: "Toronto, Canada",
    consumption: 390,
    change: "+3.1%",
    status: "High",
  },
]

export default function EnergyConsumptionPage() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Critical":
        return "destructive"
      case "High":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <div className="p-8 bg-background flex-1 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold font-headline tracking-tight mb-6">Energy Consumption Details</h1>
        <Card className="shadow-lg rounded-lg" style={{backgroundColor: "hsl(45 90% 95%)"}}>
            <CardHeader>
                <CardTitle>Factory Consumption Data</CardTitle>
            </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factory</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Consumption (kWh)</TableHead>
                  <TableHead className="text-right">Change (vs last month)</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {energyData.map((item) => (
                  <TableRow key={item.factory}>
                    <TableCell className="font-medium">{item.factory}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell className="text-right">{item.consumption}</TableCell>
                    <TableCell className={`text-right ${item.change.startsWith('+') ? 'text-destructive' : 'text-primary'}`}>
                      {item.change}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
