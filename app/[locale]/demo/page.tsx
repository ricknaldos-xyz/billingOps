'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { COMPANY_SIZES } from '@/lib/constants'

const demoSchema = z.object({
  fullName: z.string().min(1),
  workEmail: z.string().email(),
  companyName: z.string().min(1),
  companySize: z.string().min(1),
  country: z.string().min(1),
  message: z.string().optional(),
})

type DemoFormData = z.infer<typeof demoSchema>

export default function DemoPage() {
  const t = useTranslations('demo')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  })

  const onSubmit = async (data: DemoFormData) => {
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 font-display text-2xl font-bold text-slate-900">
            {t('success')}
          </h2>
        </motion.div>
      </div>
    )
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{t('subtitle')}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {t('error')}
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('fullName')} *
              </label>
              <input
                {...register('fullName')}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('workEmail')} *
              </label>
              <input
                type="email"
                {...register('workEmail')}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {errors.workEmail && (
                <p className="mt-1 text-xs text-red-500">{errors.workEmail.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('companyName')} *
              </label>
              <input
                {...register('companyName')}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {errors.companyName && (
                <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>
              )}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('companySize')} *
              </label>
              <select
                {...register('companySize')}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                defaultValue=""
              >
                <option value="" disabled>
                  {t('selectSize')}
                </option>
                {COMPANY_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {t(`sizes.${size}`)}
                  </option>
                ))}
              </select>
              {errors.companySize && (
                <p className="mt-1 text-xs text-red-500">{errors.companySize.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              {t('country')} *
            </label>
            <input
              {...register('country')}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            {errors.country && (
              <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              {t('message')}
            </label>
            <textarea
              {...register('message')}
              rows={4}
              placeholder={t('messagePlaceholder')}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? t('submitting') : t('submit')}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
