
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

const airPollutionData = [
  {
    factory: "Alpha Manufacturing",
    location: "New York, USA",
    aqi: 58,
    change: "+2.1%",
    status: "Moderate",
  },
  {
    factory: "Beta Productions",
    location: "London, UK",
    aqi: 34,
    change: "-5.0%",
    status: "Good",
  },
  {
    factory: "Gamma Innovations",
    location: "Tokyo, Japan",
    aqi: 72,
    change: "+10.5%",
    status: "Unhealthy for Sensitive Groups",
  },
  {
    factory: "Delta Solutions",
    location: "Berlin, Germany",
    aqi: 25,
    change: "-2.8%",
    status: "Good",
  },
  {
    factory: "Epsilon Works",
    location: "Sydney, Australia",
    aqi: 45,
    change: "+1.2%",
    status: "Moderate",
  },
   {
    factory: "Zeta Fabricators",
    location: "Toronto, Canada",
    aqi: 65,
    change: "+3.9%",
    status: "Moderate",
  },
]

export default function AirPollutionPage() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Unhealthy for Sensitive Groups":
        return "destructive"
      case "Moderate":
        return "secondary"
      case "Good":
        return "default"
      default:
        return "outline"
    }
  }

  const criticalFactories = airPollutionData.filter(
    (item) => item.status === "Unhealthy for Sensitive Groups"
  )

  return (
    <div className="p-8 bg-background flex-1 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Air Pollution Details</h1>
        <Card className="shadow-lg rounded-lg" style={{backgroundColor: "hsl(0 90% 97%)"}}>
            <CardHeader>
                <CardTitle>Factory Air Quality Index (AQI) Data</CardTitle>
            </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factory</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">AQI</TableHead>
                  <TableHead className="text-right">Change (vs last month)</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {airPollutionData.map((item) => (
                  <TableRow key={item.factory}>
                    <TableCell className="font-medium">{item.factory}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell className="text-right">{item.aqi}</TableCell>
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
              The following factories have critical air pollution levels and require immediate action.
            </AlertDescription>
            <Card className="mt-4 bg-transparent border-0 shadow-none">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Factory</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead className="text-right">AQI</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {criticalFactories.map((item) => (
                      <TableRow key={item.factory}>
                        <TableCell className="font-medium">{item.factory}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell className="text-right">{item.aqi}</TableCell>
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
