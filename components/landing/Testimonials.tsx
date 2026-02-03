'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 't1',
    avatar: 'MG',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 't2',
    avatar: 'JP',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 't3',
    avatar: 'LR',
    color: 'bg-green-100 text-green-700',
  },
]

export function Testimonials() {
  const t = useTranslations('testimonials')

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
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t('sectionLabel')}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            {t('sectionTitle')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t('sectionSubtitle')}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl border border-slate-200 bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-100" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                &ldquo;{t(`${item.id}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${item.color}`}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t(`${item.id}.name`)}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t(`${item.id}.role`)} &middot; {t(`${item.id}.company`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
