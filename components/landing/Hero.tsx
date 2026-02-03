'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-8 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('title')}
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-8 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              {t('ctaSecondary')}
            </a>
          </motion.div>
        </div>

        {/* Product screenshot placeholder */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="text-2xl font-bold text-primary">B</span>
                </div>
                <p className="text-sm text-slate-400">Product Screenshot</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
