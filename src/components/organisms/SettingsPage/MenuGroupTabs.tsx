'use client'

import AddMenuGroupLayout from '@/components/molecules/SettingsPage/AddMenuGroupLayout'
import ListMenuGroupLayout from '@/components/molecules/SettingsPage/ListMenuGroupLayout'

export default function MenuGroupTab() {
  return (
    <div className="space-y-6">
      {/* Add  */}
      <AddMenuGroupLayout />
      {/* list */}
      <ListMenuGroupLayout />
    </div>
  )
}
