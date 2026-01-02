import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PageHeader } from '@/components/app/PageHeader'
import { StatCard } from '@/components/app/StatCard'
import { announcements, classes, teachers, weeklyHighlights } from '@/data/mock'

export function AdminDashboard() {
  const totalStudents = classes.reduce((sum, item) => sum + item.students, 0)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Admin dashboard"
        subtitle="Your weekly operations snapshot"
        actions={<Button>New announcement</Button>}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Active classes"
          value={`${classes.length}`}
          description="Classes running this term"
        />
        <StatCard
          title="Students enrolled"
          value={`${totalStudents}`}
          description="Across all classes"
        />
        <StatCard
          title="Teachers assigned"
          value={`${teachers.length}`}
          description="Including assistants"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="soft-panel">
            <CardHeader>
              <CardTitle className="text-lg">Class assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classes.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.teacher}</TableCell>
                        <TableCell>{item.students}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.status === 'Needs cover'
                                ? 'destructive'
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
              <Button variant="outline" className="mt-4">
                Assign teachers
              </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="soft-panel">
            <CardHeader>
              <CardTitle className="text-lg">School onboarding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Progress value={72} />
              <p className="text-sm text-muted-foreground">
                72% complete · 8 student profiles remaining.
              </p>
              <Button size="sm" variant="outline">
                Finish onboarding
              </Button>
            </CardContent>
          </Card>

          <Card className="soft-panel">
            <CardHeader>
              <CardTitle className="text-lg">Weekly success metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {weeklyHighlights.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between rounded-lg bg-muted/60 p-2 text-sm"
                >
                  <span>{metric.label}</span>
                  <Badge variant="secondary">{metric.value}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="soft-panel">
        <CardHeader>
          <CardTitle className="text-lg">Recent announcements</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
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
    </div>
  )
}
