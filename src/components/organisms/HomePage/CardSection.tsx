'use client'
import TotalCard from '@/components/molecules/HomePage/TotalMenuGroupCard'
import { RootState } from '@/lib/store'
import { GroupIcon, MenuIcon } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function CardSection() {
  const dataMenuGroup = useSelector(
    (state: RootState) => state.menuGroupReducer.menuGroup
  )
  const dataMenuItem = useSelector(
    (state: RootState) => state.menuItemsReducer.menuItems
  )

  return (
    <div className="grid w-full gap-2 md:grid-cols-2 lg:grid-cols-2">
      <TotalCard
        cardTitle="Total Menu Groups"
        description="Total menu groups"
        icon={GroupIcon}
        total={dataMenuGroup.length}
      />
      <TotalCard
        cardTitle="Total Menu Items"
        description="Total menu items"
        icon={MenuIcon}
        total={dataMenuItem.length}
      />
    </div>
  )
}
