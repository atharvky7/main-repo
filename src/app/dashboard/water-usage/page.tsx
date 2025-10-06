
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

const waterData = [
  {
    factory: "Alpha Manufacturing",
    location: "New York, USA",
    usage: 850000,
    change: "+4.2%",
    status: "High",
  },
  {
    factory: "Beta Productions",
    location: "London, UK",
    usage: 620000,
    change: "-1.5%",
    status: "Normal",
  },
  {
    factory: "Gamma Innovations",
    location: "Tokyo, Japan",
    usage: 1100000,
    change: "+9.1%",
    status: "Critical",
  },
  {
    factory: "Delta Solutions",
    location: "Berlin, Germany",
    usage: 450000,
    change: "+0.5%",
    status: "Normal",
  },
  {
    factory: "Epsilon Works",
    location: "Sydney, Australia",
    usage: 980000,
    change: "-3.1%",
    status: "High",
  },
   {
    factory: "Zeta Fabricators",
    location: "Toronto, Canada",
    usage: 710000,
    change: "+2.8%",
    status: "Normal",
  },
]

export default function WaterUsagePage() {
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

  const criticalFactories = waterData.filter(item => item.status === "Critical");

  return (
    <div className="p-8 bg-background flex-1 flex flex-col items-center">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Water Usage Details</h1>
        <Card className="shadow-lg rounded-lg" style={{backgroundColor: "hsl(220 90% 97%)"}}>
            <CardHeader>
                <CardTitle>Factory Water Usage Data</CardTitle>
            </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factory</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Usage (Liters)</TableHead>
                  <TableHead className="text-right">Change (vs last month)</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {waterData.map((item) => (
                  <TableRow key={item.factory}>
                    <TableCell className="font-medium">{item.factory}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell className="text-right">{item.usage.toLocaleString()}</TableCell>
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
              The following factories have critical water usage levels and require immediate action.
            </AlertDescription>
            <Card className="mt-4 bg-transparent border-0 shadow-none">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Factory</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead className="text-right">Usage (Liters)</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {criticalFactories.map((item) => (
                      <TableRow key={item.factory}>
                        <TableCell className="font-medium">{item.factory}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell className="text-right">{item.usage.toLocaleString()}</TableCell>
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
