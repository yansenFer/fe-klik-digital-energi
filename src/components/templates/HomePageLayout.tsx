'use client'

import WelcomeSection from '../molecules/WelcomeSection'
import CardSection from '../organisms/HomePage/CardSection'

export default function HomePageLayout() {
  return (
    <div className="space-y-6">
      <WelcomeSection
        description="Manage your menu groups and items efficiently. Get started by creating a
        new menu group or adding items to existing ones."
        title="Welcome to CMS Dashboard"
      />
      <CardSection />
    </div>
  )
}
