'use client'
import AddMenuItemsLayout from '@/components/molecules/SettingsPage/AddMenuItemsLayout'
import ListMenuItemsLayout from '@/components/molecules/SettingsPage/ListMenuItemsLayout'

export default function MenuItemsTabs() {
  return (
    <div className="space-y-6">
      {/* Add */}
      <AddMenuItemsLayout />

      {/* List */}
      <ListMenuItemsLayout />
    </div>
  )
}
