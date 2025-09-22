'use client'

import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Home, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SidebarLayout() {
  const pathName = usePathname()

  return (
    <aside className="w-64 border-r bg-card min-h-[calc(100vh-4rem)]">
      <nav className="p-4">
        <Tabs value={pathName} onValueChange={() => {}} orientation="vertical">
          <TabsList className="grid w-full grid-cols-1 h-auto bg-transparent p-0 gap-1">
            <Link href={'/home-page'}>
              <TabsTrigger
                value="/home-page"
                className="w-full cursor-pointer justify-between items-center gap-2 data-[state=active]:bg-primary flex p-2 rounded-xl data-[state=active]:text-primary-foreground"
              >
                <Home className="h-5 w-5" />
                <span className="flex w-full text-center">Home</span>
              </TabsTrigger>
            </Link>

            <Link href={'/settings'}>
              <TabsTrigger
                value="/settings"
                className="w-full cursor-pointer justify-between items-center gap-2 data-[state=active]:bg-primary flex p-2 rounded-xl data-[state=active]:text-primary-foreground"
              >
                <Settings className="h-5 w-5" />
                <span className="flex w-full text-center">Setting</span>
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </nav>
    </aside>
  )
}
