'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

type TotalCardProps = {
  cardTitle: string
  total: number
  description: string
  icon: LucideIcon
}
export default function TotalCard({
  cardTitle,
  total,
  description,
  icon: Icon,
}: TotalCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{total}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
