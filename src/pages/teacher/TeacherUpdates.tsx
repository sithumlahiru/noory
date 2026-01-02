import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { PageHeader } from '@/components/app/PageHeader'
import { dailyUpdates } from '@/data/mock'

export function TeacherUpdates() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Daily updates"
        subtitle="Tap to log meals, naps, mood, and notes"
        actions={<Button>Send updates</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Quick update set</CardTitle>
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
                  <Badge variant="secondary">{update.value}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{update.detail}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    Update
                  </Button>
                  <Button size="sm" variant="outline">
                    Clear
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="soft-panel">
          <CardHeader>
            <CardTitle className="text-lg">Add a note</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea placeholder="Optional note for parents..." />
            <Button className="w-full">Save note</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
