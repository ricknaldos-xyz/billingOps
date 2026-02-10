'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import {
  Check,
  ArrowRight,
  FileText,
  Calculator,
  Users,
  FolderKanban,
  Receipt,
  UsersRound,
  Briefcase,
  Building2,
  Sparkles,
} from 'lucide-react'
import { PRICING_TIERS, MODULES, MODULE_BUNDLES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Calculator,
  Users,
  FolderKanban,
  Receipt,
  UsersRound,
  Briefcase,
  Building2,
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-600 border-blue-200',
  green: 'bg-green-100 text-green-600 border-green-200',
  purple: 'bg-purple-100 text-purple-600 border-purple-200',
  orange: 'bg-orange-100 text-orange-600 border-orange-200',
}

export function Pricing() {
  const t = useTranslations('pricing')
  const tModules = useTranslations('modules')
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
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
          <p className="mt-4 text-lg text-slate-600">
            {t('sectionSubtitle')}
          </p>
        </motion.div>

        {/* Module showcase */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-center text-sm font-medium text-slate-500 mb-4">
            {t('modulesAvailable')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {MODULES.map((mod) => {
              const Icon = iconMap[mod.icon]
              return (
                <div
                  key={mod.id}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2',
                    colorMap[mod.color]
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {tModules(mod.id)}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              !annual ? 'text-slate-900' : 'text-slate-400'
            )}
          >
            {t('monthly')}
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              'relative inline-flex h-7 w-12 items-center rounded-full transition-colors',
              annual ? 'bg-primary' : 'bg-slate-300'
            )}
            aria-label="Toggle billing period"
          >
            <span
              className={cn(
                'inline-block h-5 w-5 rounded-full bg-white shadow transition-transform',
                annual ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium transition-colors',
              annual ? 'text-slate-900' : 'text-slate-400'
            )}
          >
            {t('annual')}
          </span>
          {annual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
            >
              {t('annualSave')}
            </motion.span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, index) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice
            const isEnterprise = tier.id === 'enterprise'
            const isStarter = tier.id === 'starter'

            return (
              <motion.div
                key={tier.id}
                className={cn(
                  'relative flex flex-col rounded-3xl border p-8',
                  tier.highlighted
                    ? 'border-primary/30 bg-white shadow-xl shadow-primary/10 ring-1 ring-primary/10'
                    : 'border-slate-200 bg-white'
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary/25">
                      {t(`${tier.id}.badge`)}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {t(`${tier.id}.name`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {t(`${tier.id}.description`)}
                  </p>
                </div>

                <div className="mt-6 border-b border-slate-100 pb-6">
                  {isEnterprise ? (
                    <div>
                      <span className="font-display text-4xl font-bold text-slate-900">
                        {t(`${tier.id}.price`)}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-5xl font-bold text-slate-900">
                          ${price}
                        </span>
                        <span className="text-sm text-slate-500">
                          {t('perMonth')}
                        </span>
                      </div>
                      {isStarter && tier.additionalModulePrice > 0 && (
                        <p className="mt-2 text-sm text-slate-500">
                          {t('perModule', { price: tier.additionalModulePrice })}
                        </p>
                      )}
                      {'employeePrice' in tier && tier.employeePrice > 0 && (
                        <p className="mt-2 text-sm text-slate-500">
                          {t('perEmployee', { price: tier.employeePrice })}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Module indicator for Starter */}
                {isStarter && (
                  <div className="mt-6 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {t('chooseModules')}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {MODULES.map((mod) => {
                        const Icon = iconMap[mod.icon]
                        return (
                          <div
                            key={mod.id}
                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2"
                          >
                            <Icon className="h-4 w-4 text-slate-400" />
                            <span className="text-xs text-slate-600">
                              {tModules(mod.id)}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* All modules indicator for Growth */}
                {tier.id === 'growth' && (
                  <div className="mt-6 rounded-xl bg-primary/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {t('allModulesIncluded')}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {MODULES.map((mod) => {
                        const Icon = iconMap[mod.icon]
                        return (
                          <div
                            key={mod.id}
                            className={cn(
                              'flex items-center gap-1.5 rounded-full border px-2.5 py-1',
                              colorMap[mod.color]
                            )}
                          >
                            <Icon className="h-3 w-3" />
                            <span className="text-xs font-medium">
                              {tModules(mod.id)}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <ul className="mt-6 flex-1 space-y-3">
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
                    'mt-8 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all',
                    tier.highlighted
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:-translate-y-0.5'
                      : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {isEnterprise ? t('ctaEnterprise') : t('cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bundles suggestion */}
        <motion.div
          className="mt-16 mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
            {t('popularCombos')}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {MODULE_BUNDLES.map((bundle) => {
              const Icon = iconMap[bundle.icon]
              return (
                <div
                  key={bundle.id}
                  className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 mb-3">
                    <Icon className="h-5 w-5 text-slate-600" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t(`bundles.${bundle.id}.name`)}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {t(`bundles.${bundle.id}.modules`)}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Guarantee note */}
        <motion.p
          className="mt-12 text-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('guarantee')}
        </motion.p>
      </div>
    </section>
  )
}
