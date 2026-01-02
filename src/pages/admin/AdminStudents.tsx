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
import { students } from '@/data/mock'

export function AdminStudents() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Students"
        subtitle="View student profiles, guardians, and pickup notes"
        actions={<Button>Add student</Button>}
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">Student directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Guardian</TableHead>
                <TableHead>Pickup</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.className}</TableCell>
                  <TableCell>{student.guardian}</TableCell>
                  <TableCell>{student.pickup}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{student.notes}</Badge>
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
