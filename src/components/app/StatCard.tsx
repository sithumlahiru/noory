import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type StatCardProps = {
  title: string
  value: string
  description?: string
  footer?: ReactNode
}

export function StatCard({ title, value, description, footer }: StatCardProps) {
  return (
    <Card className="soft-panel">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-2xl font-semibold text-foreground">{value}</div>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
        {footer ? <div className="pt-2 text-xs text-muted-foreground">{footer}</div> : null}
      </CardContent>
    </Card>
  )
}
