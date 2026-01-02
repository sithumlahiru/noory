import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/app/PageHeader'
import { announcements } from '@/data/mock'

export function ParentAnnouncements() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Announcements"
        subtitle="Updates from the school"
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">Latest updates</CardTitle>
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
                <Badge variant="outline">{item.date}</Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{item.scope}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
