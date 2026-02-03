'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Puzzle } from 'lucide-react'

const INTEGRATIONS = [
  { name: 'Stripe', color: 'bg-purple-100 text-purple-600', initials: 'St' },
  { name: 'Slack', color: 'bg-pink-100 text-pink-600', initials: 'Sl' },
  { name: 'GitHub', color: 'bg-slate-100 text-slate-600', initials: 'GH' },
  { name: 'Resend', color: 'bg-blue-100 text-blue-600', initials: 'Re' },
  { name: 'OpenAI', color: 'bg-green-100 text-green-600', initials: 'AI' },
  { name: 'Telegram', color: 'bg-sky-100 text-sky-600', initials: 'TG' },
  { name: 'Sentry', color: 'bg-red-100 text-red-600', initials: 'Se' },
  { name: 'Vercel', color: 'bg-slate-100 text-slate-700', initials: 'Vc' },
]

export function Integrations() {
  const t = useTranslations('integrations')

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
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
            className="grid grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {INTEGRATIONS.map((integration, i) => (
              <motion.div
                key={integration.name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                whileHover={{ y: -4 }}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${integration.color}`}
                >
                  {integration.initials}
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {integration.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
