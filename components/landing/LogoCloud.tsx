'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const LOGOS = [
  { name: 'Rowship', initials: 'RS' },
  { name: 'Hub Digital', initials: 'HD' },
  { name: 'TechCorp', initials: 'TC' },
  { name: 'Andean Group', initials: 'AG' },
  { name: 'Pacific Solutions', initials: 'PS' },
  { name: 'Vertek Agency', initials: 'VA' },
]

export function LogoCloud() {
  const t = useTranslations('logoCloud')

  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-slate-400">
          {t('title')}
        </p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-xs font-bold text-slate-500">
                {logo.initials}
              </div>
              <span className="text-base font-semibold text-slate-500">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
