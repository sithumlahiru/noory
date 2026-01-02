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
import { attendance } from '@/data/mock'

export function AdminAttendance() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Attendance overview"
        subtitle="Monitor daily check-ins across classes"
        actions={<Button variant="outline">Download report</Button>}
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
