'use client'
import { setActiveTab, setIsMobileMenuOpen } from '@/lib/features/sidebarSlice'
import { Tabs, TabsContent } from '@radix-ui/react-tabs'
import HeaderLayout from '../molecules/HeaderLayout'
import SidebarLayout from '../molecules/SidebarLayout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

type AppLayoutProps = {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.sidebarReducer.isMobileMenuOpen
  )
  const activeTab = useSelector(
    (state: RootState) => state.sidebarReducer.activeTab
  )

  return (
    <div className="min-h-screen bg-background">
      <HeaderLayout />

      <div className="flex relative">
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => dispatch(setIsMobileMenuOpen(false))}
          />
        )}
        <SidebarLayout />

        {/* Content Area */}
        <main className="flex-1 p-6 md:ml-0">
          <Tabs
            value={activeTab}
            onValueChange={(e) => dispatch(setActiveTab(e))}
          >
            <TabsContent value="home" className="mt-0">
              {children}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
