'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  const t = useTranslations('cta')

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 sm:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              {t('subtitle')}
            </p>
            <Link
              href="/demo"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-medium text-primary shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl"
            >
              {t('button')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
