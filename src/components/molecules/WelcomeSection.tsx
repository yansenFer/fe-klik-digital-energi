'use client'
import HeaderTitlePage from '@/components/atoms/HeaderTitlePage'

type WelcomeSectionProps = {
  title: string
  description: string
}

export default function WelcomeSection({
  title,
  description,
}: WelcomeSectionProps) {
  return (
    <div className="space-y-2">
      <HeaderTitlePage title={title} />
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
