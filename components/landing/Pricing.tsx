'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRICING_TIERS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Pricing() {
  const t = useTranslations('pricing')
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
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

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={cn(
              'text-sm font-medium',
              !annual ? 'text-slate-900' : 'text-slate-400'
            )}
          >
            {t('monthly')}
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
              annual ? 'bg-primary' : 'bg-slate-300'
            )}
            aria-label="Toggle billing period"
          >
            <span
              className={cn(
                'inline-block h-4 w-4 rounded-full bg-white transition-transform',
                annual ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium',
              annual ? 'text-slate-900' : 'text-slate-400'
            )}
          >
            {t('annual')}
          </span>
          {annual && (
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              {t('annualSave')}
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, index) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice
            const isEnterprise = tier.id === 'enterprise'

            return (
              <motion.div
                key={tier.id}
                className={cn(
                  'relative rounded-3xl border p-8',
                  tier.highlighted
                    ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10'
                    : 'border-slate-200 bg-white'
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                    {t(`${tier.id}.badge`)}
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold text-slate-900">
                  {t(`${tier.id}.name`)}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {t(`${tier.id}.description`)}
                </p>

                <div className="mt-6">
                  {isEnterprise ? (
                    <span className="font-display text-4xl font-bold text-slate-900">
                      {t(`${tier.id}.price`)}
                    </span>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-bold text-slate-900">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-500">
                        {t('perMonth')}
                      </span>
                    </>
                  )}
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((featureKey) => (
                    <li key={featureKey} className="flex items-start gap-3">
                      <Check
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          tier.highlighted ? 'text-primary' : 'text-green-500'
                        )}
                      />
                      <span className="text-sm text-slate-600">
                        {t(`features.${featureKey}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className={cn(
                    'mt-8 block rounded-xl py-3 text-center text-sm font-medium transition-colors',
                    tier.highlighted
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {isEnterprise ? t('ctaEnterprise') : t('cta')}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
