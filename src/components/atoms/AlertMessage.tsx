'use client'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

type AlertMessageProps = {
  alertTitle: string
  alertDescription: string
}

export default function AlertMessage({
  alertTitle,
  alertDescription,
}: AlertMessageProps) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{alertDescription}</AlertDescription>
    </Alert>
  )
}
