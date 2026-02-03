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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute top-1/3 right-0 translate-x-1/3 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Copy */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t('badge')}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              {t('subtitle')}
            </motion.p>

            {/* Pain points checklist */}
            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
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
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                {t('cta')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#demo-video"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                  <Play className="h-3.5 w-3.5 fill-slate-700 text-slate-700" />
                </span>
                {t('ctaVideo')}
              </a>
            </motion.div>
          </div>

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

                  {/* Stat cards */}
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
                          <div
                            className={`mt-1 h-1.5 rounded-full ${
                              i === 0
                                ? 'w-3/4 bg-green-300'
                                : i === 1
                                  ? 'w-1/2 bg-blue-300'
                                  : i === 2
                                    ? 'w-2/3 bg-purple-300'
                                    : 'w-[94%] bg-amber-300'
                            }`}
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Chart area */}
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
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/60 to-primary/20"
                            style={{ height: `${h}px` }}
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

              {/* Floating notification cards */}
              <motion.div
                className="absolute -left-8 top-1/4 rounded-xl border border-slate-200 bg-white p-3 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      {t('floatingPayment')}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {t('floatingPaymentSub')}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 rounded-xl border border-slate-200 bg-white p-3 shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      {t('floatingRevenue')}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {t('floatingRevenueSub')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white/60 p-8 backdrop-blur sm:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.label} className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  {metric.value}
                </div>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {metric.label}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
