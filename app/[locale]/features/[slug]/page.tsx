import { notFound } from 'next/navigation'
import { ModulePageClient } from './ModulePageClient'

const VALID_SLUGS = ['operations', 'finance', 'hr', 'projects'] as const

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }))
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!VALID_SLUGS.includes(slug as (typeof VALID_SLUGS)[number])) {
    notFound()
  }

  return <ModulePageClient slug={slug} />
}
