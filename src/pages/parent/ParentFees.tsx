import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/app/PageHeader'
import { feeStatus } from '@/data/mock'

export function ParentFees() {
  const myFee = feeStatus.find((item) => item.name === 'Lihini Peris')

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Fee status"
        subtitle="View-only fee visibility"
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">October</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">Amount due</p>
              <p className="text-2xl font-semibold text-foreground">
                {myFee?.amount ?? 'LKR 8,500'}
              </p>
            </div>
            <Badge
              variant={
                myFee?.status === 'Overdue'
                  ? 'destructive'
                  : myFee?.status === 'Pending'
                    ? 'outline'
                    : 'secondary'
              }
            >
              {myFee?.status ?? 'Pending'}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            This portal is view-only. Please contact the admin to confirm payments.
          </p>
          <Button variant="outline" className="w-full">
            Contact school office
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
