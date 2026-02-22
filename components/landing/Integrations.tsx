'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Puzzle } from 'lucide-react'

const NATIVE_INTEGRATIONS = [
  { name: 'Stripe', color: 'bg-purple-100 text-purple-600', initials: 'St' },
  { name: 'Slack', color: 'bg-pink-100 text-pink-600', initials: 'Sl' },
  { name: 'GitHub', color: 'bg-slate-100 text-slate-600', initials: 'GH' },
  { name: 'Resend', color: 'bg-blue-100 text-blue-600', initials: 'Re' },
  { name: 'OpenAI', color: 'bg-green-100 text-green-600', initials: 'AI' },
  { name: 'Telegram', color: 'bg-sky-100 text-sky-600', initials: 'TG' },
  { name: 'Sentry', color: 'bg-red-100 text-red-600', initials: 'Se' },
]

const ERP_INTEGRATIONS = [
  { name: 'SAP', color: 'bg-blue-100 text-blue-700', initials: 'SAP' },
  { name: 'Odoo', color: 'bg-violet-100 text-violet-600', initials: 'Od' },
  { name: 'QuickBooks', color: 'bg-green-100 text-green-700', initials: 'QB' },
  { name: 'Xero', color: 'bg-cyan-100 text-cyan-700', initials: 'Xe' },
  { name: 'NetSuite', color: 'bg-orange-100 text-orange-600', initials: 'NS' },
]

export function Integrations() {
  const t = useTranslations('integrations')

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
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
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {t('sectionSubtitle')}
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <Puzzle className="h-5 w-5 text-primary" />
              <span className="text-sm text-slate-600">
                {t('apiNote')}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {NATIVE_INTEGRATIONS.map((integration) => (
                <motion.div
                  key={integration.name}
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05]"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl text-sm font-bold shadow-sm transition-shadow group-hover:shadow-md ${integration.color}`}
                  >
                    {integration.initials}
                  </div>
                  <span className="text-xs font-medium text-slate-600">
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t('erpLabel')}
              </p>
              <div className="grid grid-cols-5 gap-3">
                {ERP_INTEGRATIONS.map((integration) => (
                  <motion.div
                    key={integration.name}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold ${integration.color}`}
                    >
                      {integration.initials}
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">
                      {integration.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
