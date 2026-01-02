import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/app/PageHeader'
import { classes } from '@/data/mock'

export function AdminClasses() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Classes"
        subtitle="Manage classrooms, capacity, and teacher assignments"
        actions={<Button>Add new class</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {classes.map((item) => (
          <Card key={item.id} className="soft-panel">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Room {item.room} · {item.students} students
                </p>
              </div>
              <Badge
                variant={item.status === 'Needs cover' ? 'destructive' : 'secondary'}
              >
                {item.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Lead teacher</span>
                <span className="font-medium text-foreground">{item.teacher}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  Assign teacher
                </Button>
                <Button size="sm" variant="outline">
                  View roster
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
