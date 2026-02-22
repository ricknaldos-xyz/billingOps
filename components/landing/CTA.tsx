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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent/80 px-8 py-16 text-center sm:px-16 sm:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated decorative orbs */}
          <motion.div
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/[0.06]"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/[0.04]"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Noise + grid overlays */}
          <div className="noise-bg absolute inset-0 opacity-[0.04]" />
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              {t('subtitle')}
            </p>
            <Link
              href="/demo"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-0.5"
            >
              {t('button')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
