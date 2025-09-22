'use client'
import { X, Menu } from 'lucide-react'
import HeaderTitlePage from '../atoms/HeaderTitlePage'
import LogoutButton from '../atoms/LogoutButton'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { setIsMobileMenuOpen } from '@/lib/features/sidebarSlice'

export default function HeaderLayout() {
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.sidebarReducer.isMobileMenuOpen
  )
  const dispatch = useDispatch()
  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => dispatch(setIsMobileMenuOpen(!isMobileMenuOpen))}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
          <HeaderTitlePage title="CMS Dashboard" />
        </div>
        <LogoutButton />
      </div>
    </header>
  )
}
