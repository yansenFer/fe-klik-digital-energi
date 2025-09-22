'use client'
import TabsMenuLayout from '../organisms/SettingsPage/TabsMenuLayout'
import WelcomeSection from '../molecules/WelcomeSection'

export default function SettingPageLayout() {
  return (
    <div className="space-y-6">
      <WelcomeSection
        title="Settings"
        description="Manage your menu groups and individual menu items. Create, edit, and
          organize your content structure."
      />
      <TabsMenuLayout />
    </div>
  )
}
