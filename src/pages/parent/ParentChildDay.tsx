import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/app/PageHeader'

const timeline = [
  { time: '8:12 AM', label: 'Check-in', detail: 'Greeted Ms. Perera' },
  { time: '9:10 AM', label: 'Activity', detail: 'Outdoor play + circle time' },
  { time: '10:30 AM', label: 'Snack', detail: 'Fruit + water' },
  { time: '12:30 PM', label: 'Nap', detail: 'Rested comfortably' },
  { time: '2:15 PM', label: 'Art', detail: 'Painting colors + shapes' },
]

export function ParentChildDay() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Child day timeline"
        subtitle="View-only log of today’s activities"
      />

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">Today’s timeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {timeline.map((event) => (
            <div
              key={event.time}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/60 bg-white p-4"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {event.label}
                </p>
                <p className="text-xs text-muted-foreground">{event.detail}</p>
              </div>
              <Badge variant="secondary">{event.time}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
