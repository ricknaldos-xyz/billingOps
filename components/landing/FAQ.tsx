'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_COUNT } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function FAQ() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const questions = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    question: t(`q${i + 1}.question`),
    answer: t(`q${i + 1}.answer`),
  }))

  return (
    <section id="faq" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="text-center"
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

        <div className="mt-12 space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-white transition-all duration-200',
                  isOpen
                    ? 'border-primary/20 shadow-md shadow-primary/[0.04]'
                    : 'border-slate-200 hover:border-slate-300'
                )}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    'pr-4 font-medium transition-colors',
                    isOpen ? 'text-primary' : 'text-slate-900'
                  )}>
                    {item.question}
                  </span>
                  <div className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all',
                    isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'
                  )}>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
