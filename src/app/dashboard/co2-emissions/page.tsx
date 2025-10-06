
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const co2Data = [
  {
    factory: "Alpha Manufacturing",
    location: "New York, USA",
    emissions: 120,
    change: "+3.5%",
    status: "High",
  },
  {
    factory: "Beta Productions",
    location: "London, UK",
    emissions: 80,
    change: "-1.2%",
    status: "Normal",
  },
  {
    factory: "Gamma Innovations",
    location: "Tokyo, Japan",
    emissions: 150,
    change: "+10.1%",
    status: "Critical",
  },
  {
    factory: "Delta Solutions",
    location: "Berlin, Germany",
    emissions: 55,
    change: "+0.8%",
    status: "Low",
  },
  {
    factory: "Epsilon Works",
    location: "Sydney, Australia",
    emissions: 110,
    change: "-2.5%",
    status: "High",
  },
   {
    factory: "Zeta Fabricators",
    location: "Toronto, Canada",
    emissions: 95,
    change: "+1.9%",
    status: "Normal",
  },
]

export default function CO2EmissionsPage() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Critical":
        return "destructive"
      case "High":
        return "secondary"
      case "Low":
        return "default"
      default:
        return "outline"
    }
  }
  
  const criticalFactories = co2Data.filter(item => item.status === "Critical");

  return (
    <div className="p-8 bg-background flex-1 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">CO2 Emissions Details</h1>
        <Card className="shadow-lg rounded-lg" style={{backgroundColor: "hsl(220 10% 97%)"}}>
            <CardHeader>
                <CardTitle>Factory CO2 Emissions Data</CardTitle>
            </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factory</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Emissions (tons)</TableHead>
                  <TableHead className="text-right">Change (vs last month)</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {co2Data.map((item) => (
                  <TableRow key={item.factory}>
                    <TableCell className="font-medium">{item.factory}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell className="text-right">{item.emissions}</TableCell>
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

        {criticalFactories.length > 0 && (
          <Alert variant="destructive" className="shadow-lg rounded-lg">
             <AlertCircle className="h-4 w-4" />
            <AlertTitle>Immediate Attention Required!</AlertTitle>
            <AlertDescription>
              The following factories have critical CO2 emission levels and require immediate action.
            </AlertDescription>
            <Card className="mt-4 bg-transparent border-0 shadow-none">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Factory</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead className="text-right">Emissions (tons)</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {criticalFactories.map((item) => (
                      <TableRow key={item.factory}>
                        <TableCell className="font-medium">{item.factory}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell className="text-right">{item.emissions}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Alert>
        )}
      </div>
    </div>
  )
}
