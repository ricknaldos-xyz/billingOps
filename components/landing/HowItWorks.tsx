'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Settings, GitPullRequest, Zap, LineChart } from 'lucide-react'

const steps = [
  { key: 'step1', icon: Settings },
  { key: 'step2', icon: GitPullRequest },
  { key: 'step3', icon: Zap },
  { key: 'step4', icon: LineChart },
]

export function HowItWorks() {
  const t = useTranslations('howItWorks')

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            {t('sectionTitle')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('sectionSubtitle')}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.key}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Step number */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {t(`${step.key}.description`)}
                </p>

                {/* Connector line (hidden on last and mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-px w-8 translate-x-full bg-slate-300 lg:block" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
