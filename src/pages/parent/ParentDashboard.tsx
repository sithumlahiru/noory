import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/app/PageHeader'
import { dailyUpdates, parentProfile } from '@/data/mock'

export function ParentDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Parent overview"
        subtitle="Your child’s day at a glance"
        actions={<Button variant="outline">Contact teacher</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="soft-panel">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-lg">{parentProfile.child}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {parentProfile.className} · Age {parentProfile.age}
              </p>
            </div>
            <Badge variant="secondary">{parentProfile.attendance}</Badge>
          </CardHeader>
          <CardContent className="grid gap-3">
            {dailyUpdates.map((update) => (
              <div
                key={update.label}
                className="rounded-xl border border-border/60 bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">
                    {update.label}
                  </p>
                  <Badge variant="outline">{update.value}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{update.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Today’s highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>✔ Story time participation</p>
            <p>✔ Lunch finished</p>
            <p>✔ Artwork sent home</p>
            <Button className="w-full">View daily report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
