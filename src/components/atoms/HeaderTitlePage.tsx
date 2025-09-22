'use client'

type HeaderTitlePageProps = {
  title: string
}

export default function HeaderTitlePage({ title }: HeaderTitlePageProps) {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  )
}
