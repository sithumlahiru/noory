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
import { feeStatus } from '@/data/mock'

export function AdminFees() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Fee status"
        subtitle="Track payments and send reminders"
        actions={<Button>Send reminders</Button>}
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">This month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStatus.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.className}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === 'Overdue'
                            ? 'destructive'
                            : item.status === 'Pending'
                              ? 'outline'
                              : 'secondary'
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
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
