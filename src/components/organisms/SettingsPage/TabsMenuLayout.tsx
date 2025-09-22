'use client'
import ListTabLayout from '@/components/molecules/SettingsPage/ListTabLayout'
import TabsContentLayout from '@/components/molecules/SettingsPage/TabsContentLayout'
import { Tabs } from '@radix-ui/react-tabs'
import MenuGroupTab from './MenuGroupTabs'
import MenuItemsTabs from './MenuItemsTabs'

export default function TabsMenuLayout() {
  return (
    <Tabs defaultValue="menu-groups" className="space-y-4">
      <ListTabLayout />
      <TabsContentLayout
        value="menu-groups"
        cardDescription="Create and manage menu groups to organize your content."
        cardTitle="Menu Group Management"
      >
        <MenuGroupTab />
      </TabsContentLayout>
      <TabsContentLayout
        value="menus"
        cardDescription="Create and manage menu items to organize your content."
        cardTitle="Menu Item Management"
      >
        <MenuItemsTabs />
      </TabsContentLayout>
    </Tabs>
  )
}
