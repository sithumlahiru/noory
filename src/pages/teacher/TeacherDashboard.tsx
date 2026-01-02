import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PageHeader } from '@/components/app/PageHeader'
import { attendance, pickupLog } from '@/data/mock'

export function TeacherDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Teacher dashboard"
        subtitle="Sunflower class · Today"
        actions={<Button>Log daily update</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Check-in</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendance.map((record) => (
                  <TableRow key={record.name}>
                    <TableCell className="font-medium">{record.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          record.status === 'Absent'
                            ? 'destructive'
                            : record.status === 'Late'
                              ? 'outline'
                              : 'secondary'
                        }
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{record.checkIn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Pickup tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pickupLog.map((entry) => (
              <div
                key={entry.time}
                className="flex items-center justify-between rounded-lg bg-muted/60 p-3 text-sm"
              >
                <div>
                  <p className="font-medium text-foreground">{entry.student}</p>
                  <p className="text-xs text-muted-foreground">{entry.time}</p>
                </div>
                <Badge variant={entry.status === 'Waiting' ? 'outline' : 'secondary'}>
                  {entry.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Confirm pickup
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
