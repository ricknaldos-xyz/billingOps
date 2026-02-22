'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const stats = [
  { value: '10+', key: 'hoursWeek' },
  { value: '100%', key: 'compliant' },
  { value: 'PEN & USD', key: 'currencies' },
  { value: '5', key: 'roles' },
]

export function Stats() {
  const t = useTranslations('stats')

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light py-20">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-accent/[0.08] blur-2xl" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="group relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="absolute -inset-4 rounded-2xl bg-white/[0.03] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="font-display text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <p className="mt-3 text-sm font-medium text-white/70">
                  {t(stat.key)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
