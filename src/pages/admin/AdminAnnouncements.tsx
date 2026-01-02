import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { PageHeader } from '@/components/app/PageHeader'
import { announcements } from '@/data/mock'

export function AdminAnnouncements() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Announcements"
        subtitle="Send structured updates to parents"
        actions={<Button>Send update</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Recent announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border/60 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                  <Badge variant="outline">{item.reads} read</Badge>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.scope} · {item.date}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Draft a new update</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea placeholder="Type the announcement message..." />
            <Button className="w-full">Send to parents</Button>
            <p className="text-xs text-muted-foreground">
              Parents receive notifications instantly inside the portal.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
