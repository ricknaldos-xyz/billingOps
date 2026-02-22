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
    <section className="overflow-hidden border-y border-slate-100 bg-slate-50/50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-slate-400">
          {t('title')}
        </p>
        {/* Marquee with fade edges */}
        <div className="relative mt-8">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50/80 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50/80 to-transparent" />

          <motion.div
            className="flex gap-12"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: { duration: 30, repeat: Infinity, ease: 'linear' },
            }}
          >
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200/80 text-xs font-bold text-slate-500">
                  {logo.initials}
                </div>
                <span className="whitespace-nowrap text-base font-semibold text-slate-500">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
