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
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="font-display text-4xl font-bold text-white">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-white/70">{t(stat.key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
