import React from 'react'

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans min-h-screen">
      <main className="flex flex-col justify-center gap-[32px] items-center">
        <div className="min-h-screen bg-background">{children}</div>
      </main>
    </div>
  )
}
