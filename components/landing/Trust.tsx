'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Eye, Server, FileCheck, Users } from 'lucide-react'

const BADGES = [
  { key: 'encryption', icon: Lock },
  { key: 'rbac', icon: Users },
  { key: 'audit', icon: FileCheck },
  { key: 'uptime', icon: Server },
  { key: 'privacy', icon: Eye },
  { key: 'compliance', icon: ShieldCheck },
]

export function Trust() {
  const t = useTranslations('trust')

  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t('sectionLabel')}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            {t('sectionTitle')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t('sectionSubtitle')}</p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.key}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t(`${badge.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {t(`${badge.key}.description`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
