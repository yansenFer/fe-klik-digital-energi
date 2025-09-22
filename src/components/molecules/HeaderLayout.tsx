'use client'
import HeaderTitlePage from '../atoms/HeaderTitlePage'
import LogoutButton from '../atoms/LogoutButton'

export default function HeaderLayout() {
  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center justify-between px-6">
        <HeaderTitlePage title="CMS Dashboard" />
        <LogoutButton />
      </div>
    </header>
  )
}
