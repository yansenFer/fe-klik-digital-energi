'use client'

import { setIsMobileMenuOpen } from '@/lib/features/sidebarSlice'
import { RootState } from '@/lib/store'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Home, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

export default function SidebarLayout() {
  const pathName = usePathname()
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.sidebarReducer.isMobileMenuOpen
  )

  return (
    <aside
      className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 
          fixed md:static 
          w-64 
          border-r 
          bg-card 
          min-h-[calc(100vh-4rem)] 
          z-50 
          transition-transform 
          duration-200 
          ease-in-out
        `}
    >
      <nav className="p-4">
        <Tabs value={pathName} onValueChange={() => {}} orientation="vertical">
          <TabsList className="grid w-full grid-cols-1 h-auto bg-transparent p-0 gap-1">
            <Link href={'/home-page'}>
              <TabsTrigger
                value="/home-page"
                onClick={() => dispatch(setIsMobileMenuOpen(false))}
                className="w-full cursor-pointer justify-between items-center gap-2 data-[state=active]:bg-primary flex p-2 rounded-xl data-[state=active]:text-primary-foreground"
              >
                <Home className="h-5 w-5" />
                <span className="flex w-full text-center">Home</span>
              </TabsTrigger>
            </Link>

            <Link href={'/settings'}>
              <TabsTrigger
                onClick={() => dispatch(setIsMobileMenuOpen(false))}
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
