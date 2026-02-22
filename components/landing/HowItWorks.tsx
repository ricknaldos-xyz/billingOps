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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
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
                {/* Watermark number */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 select-none font-display text-7xl font-bold text-slate-100">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/25 transition-transform hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="relative">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {t(`${step.key}.description`)}
                  </p>
                </div>

                {/* Dashed connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-7 hidden translate-x-full lg:block">
                    <svg width="32" height="2" className="text-primary/30">
                      <line
                        x1="0" y1="1" x2="32" y2="1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
