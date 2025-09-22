'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'

type TabsContentLayoutProps = {
  value: string
  cardDescription: string
  children: React.ReactNode
  cardTitle: string
}

export default function TabsContentLayout({
  value,
  cardDescription,
  children,
  cardTitle,
}: TabsContentLayoutProps) {
  return (
    <TabsContent value={value} className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </TabsContent>
  )
}
