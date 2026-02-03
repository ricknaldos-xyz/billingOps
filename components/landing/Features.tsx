'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Workflow,
  BookOpen,
  Building2,
  Receipt,
  Users,
  BarChart3,
  ShieldCheck,
  Globe,
} from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Workflow,
  BookOpen,
  Building2,
  Receipt,
  Users,
  BarChart3,
  ShieldCheck,
  Globe,
}

export function Features() {
  const t = useTranslations('features')

  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
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

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {t(`${feature.id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {t(`${feature.id}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
