'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Users,
  Building2,
  Shield,
} from 'lucide-react'
import { fadeUpSpring, staggerContainer } from '@/lib/animations'

export function Hero() {
  const t = useTranslations('hero')

  const painPoints = [
    t('painPoint1'),
    t('painPoint2'),
    t('painPoint3'),
    t('painPoint4'),
  ]

  const metrics = [
    { value: '500+', label: t('metricCompanies'), icon: Building2 },
    { value: '10k+', label: t('metricUsers'), icon: Users },
    { value: '60%', label: t('metricTimeSaved'), icon: TrendingUp },
    { value: '99.9%', label: t('metricUptime'), icon: Shield },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-white to-white" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/[0.07] to-primary-light/[0.04]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(80px)' }}
      />
      <motion.div
        className="absolute top-[10%] right-[-15%] h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-accent/[0.06] to-accent-light/[0.03]"
        animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ filter: 'blur(70px)' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-500/[0.04] to-pink-400/[0.02]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        style={{ filter: 'blur(60px)' }}
      />

      {/* Noise + dot pattern overlays */}
      <div className="noise-bg absolute inset-0" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUpSpring}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t('badge')}
            </motion.div>

            <motion.h1
              variants={fadeUpSpring}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpSpring}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              {t('subtitle')}
            </motion.p>

            {/* Pain points checklist */}
            <motion.ul
              variants={fadeUpSpring}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-sm text-slate-700">{point}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeUpSpring}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/demo"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary-light to-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 cta-glow"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{t('cta')}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#demo-video"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-6 py-3.5 text-base font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                  <Play className="h-3.5 w-3.5 fill-primary text-primary" />
                </span>
                {t('ctaVideo')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl" />

              {/* Main dashboard card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl">
                {/* Window bar */}
                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto rounded-md bg-slate-200/60 px-12 py-1">
                    <span className="text-xs text-slate-400">app.billingops.com</span>
                  </div>
                </div>

                {/* Dashboard content mockup */}
                <div className="p-6">
                  {/* Top nav */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10" />
                      <div className="h-3 w-20 rounded-full bg-slate-200" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-lg bg-slate-100" />
                      <div className="h-8 w-8 rounded-lg bg-slate-100" />
                      <div className="h-8 w-20 rounded-lg bg-primary/10" />
                    </div>
                  </div>

                  {/* Stat cards with animated progress bars */}
                  <div className="mt-6 grid grid-cols-4 gap-3">
                    {['$124,500', '$45,200', '$79,300', '94%'].map(
                      (val, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-slate-100 p-3"
                        >
                          <div className="h-2 w-12 rounded-full bg-slate-200" />
                          <div className="mt-2 font-display text-lg font-bold text-slate-800">
                            {val}
                          </div>
                          <motion.div
                            className={`mt-1 h-1.5 rounded-full ${
                              i === 0
                                ? 'bg-green-300'
                                : i === 1
                                  ? 'bg-blue-300'
                                  : i === 2
                                    ? 'bg-purple-300'
                                    : 'bg-amber-300'
                            }`}
                            initial={{ width: 0 }}
                            animate={{
                              width: i === 0 ? '75%' : i === 1 ? '50%' : i === 2 ? '66%' : '94%',
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.6 + i * 0.1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Chart area with animated bars */}
                  <div className="mt-4 rounded-xl border border-slate-100 p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-slate-200" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded-md bg-slate-100" />
                        <div className="h-6 w-16 rounded-md bg-primary/10" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-end gap-1.5 px-2">
                      {[40, 55, 35, 70, 50, 85, 60, 90, 45, 75, 65, 95].map(
                        (h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/60 to-primary/20"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}px` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.8 + i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Table preview */}
                  <div className="mt-4 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg bg-slate-50/50 p-2.5"
                      >
                        <div className="h-8 w-8 rounded-lg bg-slate-200/60" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2.5 w-28 rounded-full bg-slate-200" />
                          <div className="h-2 w-20 rounded-full bg-slate-100" />
                        </div>
                        <div className="h-6 w-16 rounded-md bg-green-100" />
                        <div className="h-2.5 w-16 rounded-full bg-slate-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification cards — glassmorphism */}
              <motion.div
                className="absolute -left-12 top-1/4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 },
                  x: { duration: 0.5, delay: 1 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {t('floatingPayment')}
                    </p>
                    <p className="text-xs text-slate-400">
                      {t('floatingPaymentSub')}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.3 },
                  x: { duration: 0.5, delay: 1.3 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {t('floatingRevenue')}
                    </p>
                    <p className="text-xs text-slate-400">
                      {t('floatingRevenueSub')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Third floating card — uptime */}
              <motion.div
                className="absolute -right-4 top-8 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-lg backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.6 },
                  scale: { duration: 0.5, delay: 1.6 },
                  y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 },
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200">
                    <Shield className="h-4 w-4 text-amber-600" />
                  </div>
                  <p className="text-xs font-semibold text-slate-700">99.9% Uptime</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Metrics bar — glassmorphism with dividers */}
        <motion.div
          className="mt-20 grid grid-cols-2 divide-x divide-slate-200/60 rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-lg shadow-slate-900/[0.03] backdrop-blur-lg sm:grid-cols-4 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                className="px-4 py-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl">
                  {metric.value}
                </div>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {metric.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
