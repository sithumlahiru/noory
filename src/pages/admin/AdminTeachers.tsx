import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/app/PageHeader'
import { teachers } from '@/data/mock'

export function AdminTeachers() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Teachers"
        subtitle="Assign classes and monitor teacher workload"
        actions={<Button>Add teacher</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="soft-panel">
            <CardHeader>
              <CardTitle className="text-lg">{teacher.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{teacher.className}</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Contact</span>
                <span className="font-medium text-foreground">{teacher.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Parent rating</span>
                <span className="font-medium text-foreground">{teacher.rating}</span>
              </div>
              <Button size="sm" variant="outline">
                Update assignment
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
