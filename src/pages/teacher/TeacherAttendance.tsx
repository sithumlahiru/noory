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

export function TeacherAttendance() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Attendance"
        subtitle="Mark check-ins with one tap"
        actions={<Button>Save attendance</Button>}
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">Sunflower class</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quick actions</TableHead>
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
                  <TableCell className="space-x-2">
                    <Button size="sm" variant="outline">
                      Present
                    </Button>
                    <Button size="sm" variant="outline">
                      Late
                    </Button>
                    <Button size="sm" variant="outline">
                      Absent
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
