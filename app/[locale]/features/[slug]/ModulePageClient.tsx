'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Workflow,
  BookOpen,
  Users,
  FolderKanban,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const MODULE_CONFIG = {
  operations: {
    icon: Workflow,
    featureCount: 6,
    color: 'from-blue-600 to-indigo-600',
    colorLight: 'bg-blue-50 text-blue-700',
    workflowSteps: ['lead', 'discovery', 'proposal', 'contract', 'invoice', 'payment'],
  },
  finance: {
    icon: BookOpen,
    featureCount: 6,
    color: 'from-emerald-600 to-teal-600',
    colorLight: 'bg-emerald-50 text-emerald-700',
    workflowSteps: ['accounts', 'journals', 'reconciliation', 'reports', 'budgets', 'compliance'],
  },
  hr: {
    icon: Users,
    featureCount: 8,
    color: 'from-violet-600 to-purple-600',
    colorLight: 'bg-violet-50 text-violet-700',
    workflowSteps: ['employees', 'payroll', 'attendance', 'documents', 'portal', 'reviews'],
  },
  projects: {
    icon: FolderKanban,
    featureCount: 6,
    color: 'from-amber-600 to-orange-600',
    colorLight: 'bg-amber-50 text-amber-700',
    workflowSteps: ['setup', 'milestones', 'tasks', 'timeTracking', 'portal', 'reports'],
  },
} as const

type ModuleSlug = keyof typeof MODULE_CONFIG

const ALL_SLUGS = Object.keys(MODULE_CONFIG) as ModuleSlug[]

export function ModulePageClient({ slug }: { slug: string }) {
  const moduleSlug = slug as ModuleSlug
  const config = MODULE_CONFIG[moduleSlug]
  const t = useTranslations('modulePages')
  const Icon = config.icon
  const otherModules = ALL_SLUGS.filter((s) => s !== moduleSlug)

  return (
    <>
      {/* Hero */}
      <section className={cn('relative overflow-hidden bg-gradient-to-br py-24 sm:py-32', config.color)}>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#features"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('backToOverview')}
            </Link>
          </motion.div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Icon className="h-4 w-4" />
                {t(`${moduleSlug}.label`)}
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {t(`${moduleSlug}.heroTitle`)}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                {t(`${moduleSlug}.heroSubtitle`)}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {t('cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Hero visual - workflow steps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3">
                  {config.workflowSteps.map((step, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                      className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-sm font-bold text-white">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {t(`${moduleSlug}.workflow.${step}`)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key highlights */}
      <section className="border-b border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className={cn('inline-flex rounded-lg px-3 py-1 text-xs font-bold', config.colorLight)}>
                  {t(`${moduleSlug}.highlights.${i}.stat`)}
                </div>
                <p className="mt-3 text-sm font-medium text-slate-700">
                  {t(`${moduleSlug}.highlights.${i}.label`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed features */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {t(`${moduleSlug}.featuresTitle`)}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t(`${moduleSlug}.featuresSubtitle`)}
            </p>
          </motion.div>

          <div className="mt-16 space-y-20">
            {Array.from({ length: config.featureCount }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={cn(
                  'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
                  i % 2 === 1 && 'lg:[direction:rtl]'
                )}
              >
                <div className={cn(i % 2 === 1 && 'lg:[direction:ltr]')}>
                  <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold', config.colorLight)}>
                    {t(`${moduleSlug}.detailedFeatures.${i}.tag`)}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
                    {t(`${moduleSlug}.detailedFeatures.${i}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {t(`${moduleSlug}.detailedFeatures.${i}.description`)}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {Array.from({ length: 3 }, (_, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        <span className="text-sm text-slate-600">
                          {t(`${moduleSlug}.detailedFeatures.${i}.bullets.${j}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Feature visual */}
                <div className={cn(i % 2 === 1 && 'lg:[direction:ltr]')}>
                  <div className="relative">
                    <div className={cn('absolute -inset-4 rounded-3xl bg-gradient-to-br opacity-5 blur-xl', config.color)} />
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-lg">
                      <div className="rounded-xl bg-slate-50 p-6">
                        <FeatureMockup slug={moduleSlug} featureIndex={i} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={cn('relative overflow-hidden bg-gradient-to-br py-24', config.color)}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t(`${moduleSlug}.ctaTitle`)}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t(`${moduleSlug}.ctaSubtitle`)}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:-translate-y-0.5"
              >
                {t('cta')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                {t('viewPricing')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other modules */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-2xl font-bold text-slate-900">
            {t('exploreOther')}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {otherModules.map((otherSlug) => {
              const otherConfig = MODULE_CONFIG[otherSlug]
              const OtherIcon = otherConfig.icon
              return (
                <Link
                  key={otherSlug}
                  href={`/features/${otherSlug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={cn('inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold', otherConfig.colorLight)}>
                    <OtherIcon className="h-3.5 w-3.5" />
                    {t(`${otherSlug}.label`)}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                    {t(`${otherSlug}.heroTitle`)}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {t(`${otherSlug}.heroSubtitle`)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:underline">
                    {t('learnMore')}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureMockup({ slug, featureIndex }: { slug: ModuleSlug; featureIndex: number }) {
  const mockups: Record<string, Record<number, React.ReactNode>> = {
    operations: {
      0: (
        <div className="space-y-2">
          {['New Lead', 'Discovery', 'Qualified', 'Proposal'].map((stage, i) => (
            <div key={stage} className="flex items-center justify-between rounded-lg bg-white p-3">
              <div className="flex items-center gap-3">
                <div className={cn('h-2 w-2 rounded-full', i < 2 ? 'bg-blue-500' : i === 2 ? 'bg-amber-500' : 'bg-green-500')} />
                <span className="text-xs font-medium text-slate-600">{stage}</span>
              </div>
              <span className="text-xs font-bold text-slate-800">{[12, 8, 5, 3][i]}</span>
            </div>
          ))}
        </div>
      ),
      1: (
        <div className="space-y-2">
          <div className="rounded-lg bg-white p-3">
            <div className="text-xs font-medium text-slate-500">Proposal #128</div>
            <div className="mt-1 text-sm font-bold text-slate-800">$24,500.00</div>
            <div className="mt-2 flex gap-2">
              <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">Accepted</span>
              <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700">Signed</span>
            </div>
          </div>
          <div className="rounded-lg bg-white p-3">
            <div className="text-xs font-medium text-slate-500">Proposal #127</div>
            <div className="mt-1 text-sm font-bold text-slate-800">$15,000.00</div>
            <div className="mt-2"><span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">Pending</span></div>
          </div>
        </div>
      ),
      2: (
        <div className="rounded-lg bg-white p-4">
          <div className="mb-2 text-xs font-medium text-slate-500">Invoice #1042</div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-800">$4,500.00</span>
            <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Paid</span>
          </div>
          <div className="mt-3 h-1 rounded-full bg-green-500" />
        </div>
      ),
      3: (
        <div className="space-y-2">
          {['Visa •••• 4242', 'ACH Transfer', 'Wire Transfer'].map((method, i) => (
            <div key={method} className="flex items-center justify-between rounded-lg bg-white p-3">
              <span className="text-xs font-medium text-slate-600">{method}</span>
              <span className="text-xs font-bold text-slate-800">{['$4,500', '$12,000', '$8,750'][i]}</span>
            </div>
          ))}
        </div>
      ),
      4: (
        <div className="space-y-2">
          {['Email sent', 'Slack reminder', 'Final notice'].map((action, i) => (
            <div key={action} className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className={cn('h-2 w-2 rounded-full', i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-amber-500' : 'bg-red-500')} />
              <div>
                <div className="text-xs font-medium text-slate-700">{action}</div>
                <div className="text-[10px] text-slate-400">{['Day 1', 'Day 7', 'Day 14'][i]}</div>
              </div>
            </div>
          ))}
        </div>
      ),
      5: (
        <div className="space-y-2">
          <div className="rounded-lg bg-white p-3">
            <div className="text-xs font-medium text-slate-500">Project Progress</div>
            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <div className="h-full w-3/4 rounded-full bg-blue-500" />
            </div>
            <div className="mt-1 text-right text-[10px] text-slate-400">75%</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-white p-2 text-center">
              <div className="text-lg font-bold text-slate-800">4</div>
              <div className="text-[10px] text-slate-400">Milestones</div>
            </div>
            <div className="rounded-lg bg-white p-2 text-center">
              <div className="text-lg font-bold text-slate-800">12</div>
              <div className="text-[10px] text-slate-400">Documents</div>
            </div>
          </div>
        </div>
      ),
    },
    finance: {
      0: (
        <div className="space-y-2">
          {['1000 - Assets', '2000 - Liabilities', '3000 - Equity', '4000 - Revenue'].map((acct, i) => (
            <div key={acct} className="flex items-center justify-between rounded-lg bg-white p-3">
              <span className="text-xs font-medium text-slate-600">{acct}</span>
              <span className="text-xs text-slate-400">{[12, 8, 4, 6][i]} accounts</span>
            </div>
          ))}
        </div>
      ),
      1: (
        <div className="rounded-lg bg-white p-4">
          <div className="mb-2 text-xs font-medium text-slate-700">Journal Entry #247</div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-500"><span className="pl-2">Cash</span><span className="font-mono">$12,500</span></div>
            <div className="flex justify-between text-slate-500"><span className="pl-6">Revenue</span><span className="font-mono">$12,500</span></div>
          </div>
          <div className="mt-3"><span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">Posted</span></div>
        </div>
      ),
      2: (
        <div className="rounded-lg bg-white p-4">
          <div className="mb-2 text-xs font-medium text-slate-500">Revenue vs Expenses</div>
          <div className="flex items-end gap-2">
            {[60, 70, 55, 80, 90, 85].map((h, i) => (
              <div key={i} className="flex flex-1 items-end gap-0.5">
                <div className="flex-1 rounded-t-sm bg-emerald-300" style={{ height: `${h}px` }} />
                <div className="flex-1 rounded-t-sm bg-red-200" style={{ height: `${h * 0.5}px` }} />
              </div>
            ))}
          </div>
        </div>
      ),
      3: (
        <div className="space-y-2">
          {[{ label: 'Matched', count: '24', color: 'text-green-600' }, { label: 'Pending', count: '5', color: 'text-amber-600' }, { label: 'Discrepancies', count: '2', color: 'text-red-600' }].map((item) => (
            <div key={item.label} className="rounded-lg bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">{item.label}</span>
                <span className={cn('text-xs font-bold', item.color)}>{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      ),
      4: (
        <div className="rounded-lg bg-white p-4">
          <div className="space-y-2">
            {[{ from: 'USD', to: 'PEN', rate: '3.72' }, { from: 'EUR', to: 'USD', rate: '1.09' }].map((pair) => (
              <div key={pair.from} className="flex items-center justify-between rounded bg-slate-50 p-2">
                <span className="text-xs font-medium text-slate-600">{pair.from}/{pair.to}</span>
                <span className="font-mono text-xs font-bold text-slate-800">{pair.rate}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      5: (
        <div className="space-y-2">
          {[{ label: 'Marketing Budget', pct: 78, color: 'bg-emerald-500' }, { label: 'Operations Budget', pct: 92, color: 'bg-amber-500' }].map((b) => (
            <div key={b.label} className="rounded-lg bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">{b.label}</span>
                <span className="text-xs text-slate-400">{b.pct}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div className={cn('h-full rounded-full', b.color)} style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    hr: {
      0: (
        <div className="space-y-2">
          {[{ name: 'Maria Garcia', dept: 'Engineering', status: 'Active' }, { name: 'Carlos Lopez', dept: 'Marketing', status: 'Active' }, { name: 'Ana Torres', dept: 'Finance', status: 'On Leave' }].map((e) => (
            <div key={e.name} className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                {e.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-slate-700">{e.name}</div>
                <div className="text-[10px] text-slate-400">{e.dept}</div>
              </div>
              <span className={cn('rounded px-2 py-0.5 text-[10px] font-medium', e.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700')}>{e.status}</span>
            </div>
          ))}
        </div>
      ),
      1: (
        <div className="rounded-lg bg-white p-4">
          <div className="text-xs font-medium text-slate-500">Payroll - January 2026</div>
          <div className="mt-3 space-y-1.5">
            <div className="flex justify-between text-xs"><span className="text-slate-500">Gross Pay</span><span className="font-mono font-bold text-slate-800">$45,200</span></div>
            <div className="flex justify-between text-xs"><span className="text-slate-500">Deductions</span><span className="font-mono text-red-600">-$12,350</span></div>
            <div className="mt-1 border-t pt-1.5"><div className="flex justify-between text-xs"><span className="font-medium text-slate-700">Net Pay</span><span className="font-mono font-bold text-green-600">$32,850</span></div></div>
          </div>
        </div>
      ),
      2: (
        <div className="grid grid-cols-3 gap-2">
          {[{ label: 'Present', val: '42' }, { label: 'PTO', val: '3' }, { label: 'Sick', val: '1' }].map((s) => (
            <div key={s.label} className="rounded-lg bg-white p-2 text-center">
              <div className="text-lg font-bold text-slate-800">{s.val}</div>
              <div className="text-[10px] text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      ),
      3: (
        <div className="space-y-2">
          {['Employment Contract', 'NDA', 'Tax Form W-4'].map((doc, i) => (
            <div key={doc} className="flex items-center justify-between rounded-lg bg-white p-3">
              <span className="text-xs font-medium text-slate-600">{doc}</span>
              <span className={cn('rounded px-2 py-0.5 text-[10px] font-medium', i < 2 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700')}>{i < 2 ? 'Signed' : 'Pending'}</span>
            </div>
          ))}
        </div>
      ),
      4: (
        <div className="space-y-2">
          {['View Payslips', 'Request Time Off', 'My Documents'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="h-8 w-8 rounded-lg bg-violet-100" />
              <span className="text-xs font-medium text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      ),
      5: (
        <div className="rounded-lg bg-white p-4">
          <div className="text-xs font-medium text-slate-500">Performance Review Q4</div>
          <div className="mt-3 space-y-2">
            {[{ label: 'Self', pct: 85 }, { label: 'Manager', pct: 90 }, { label: 'Peers', pct: 82 }].map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-[10px] text-slate-500"><span>{r.label}</span><span>{r.pct}%</span></div>
                <div className="mt-1 h-1.5 rounded-full bg-slate-100"><div className="h-full rounded-full bg-violet-500" style={{ width: `${r.pct}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      ),
      6: (
        <div className="space-y-2">
          {[{ role: 'Frontend Dev', apps: 12, status: 'Open' }, { role: 'Designer', apps: 8, status: 'Screening' }].map((job) => (
            <div key={job.role} className="rounded-lg bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">{job.role}</span>
                <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700">{job.status}</span>
              </div>
              <div className="mt-1 text-[10px] text-slate-400">{job.apps} applicants</div>
            </div>
          ))}
        </div>
      ),
      7: (
        <div className="rounded-lg bg-white p-3">
          <div className="text-xs font-medium text-slate-700">John Contractor</div>
          <div className="mt-1 flex gap-2">
            <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">1099 Filed</span>
            <span className="text-[10px] text-slate-400">$8,500 YTD</span>
          </div>
        </div>
      ),
    },
    projects: {
      0: (
        <div className="space-y-2">
          {[{ name: 'Website Redesign', pct: 78, health: 'On Track' }, { name: 'Mobile App', pct: 45, health: 'At Risk' }].map((p) => (
            <div key={p.name} className="rounded-lg bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">{p.name}</span>
                <span className={cn('rounded px-2 py-0.5 text-[10px] font-medium', p.health === 'On Track' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700')}>{p.health}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className="h-full rounded-full bg-amber-500" style={{ width: `${p.pct}%` }} /></div>
            </div>
          ))}
        </div>
      ),
      1: (
        <div className="space-y-2">
          {['Design Phase', 'Development', 'Testing', 'Launch'].map((m, i) => (
            <div key={m} className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className={cn('h-3 w-3 rounded-full', i < 2 ? 'bg-green-500' : i === 2 ? 'bg-amber-500' : 'bg-slate-300')} />
              <span className="text-xs font-medium text-slate-600">{m}</span>
            </div>
          ))}
        </div>
      ),
      2: (
        <div className="space-y-2">
          {[{ task: 'UI Components', assignee: 'MG', status: 'Done' }, { task: 'API Integration', assignee: 'CL', status: 'In Progress' }, { task: 'Unit Tests', assignee: 'AT', status: 'To Do' }].map((t) => (
            <div key={t.task} className="flex items-center justify-between rounded-lg bg-white p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">{t.assignee}</div>
                <span className="text-xs font-medium text-slate-600">{t.task}</span>
              </div>
              <span className={cn('rounded px-2 py-0.5 text-[10px] font-medium', t.status === 'Done' ? 'bg-green-100 text-green-700' : t.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500')}>{t.status}</span>
            </div>
          ))}
        </div>
      ),
      3: (
        <div className="rounded-lg bg-white p-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs"><span className="text-slate-500">Billable</span><span className="font-mono font-bold text-slate-800">124h</span></div>
            <div className="flex justify-between text-xs"><span className="text-slate-500">Non-billable</span><span className="font-mono text-slate-500">18h</span></div>
            <div className="border-t pt-1.5"><div className="flex justify-between text-xs"><span className="font-medium text-slate-700">Total</span><span className="font-mono font-bold text-slate-800">142h</span></div></div>
          </div>
        </div>
      ),
      4: (
        <div className="rounded-lg bg-white p-3">
          <div className="text-xs font-medium text-slate-500">Client view</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded bg-slate-50 p-2 text-center"><div className="text-lg font-bold text-slate-800">4</div><div className="text-[10px] text-slate-400">Milestones</div></div>
            <div className="rounded bg-slate-50 p-2 text-center"><div className="text-lg font-bold text-slate-800">87%</div><div className="text-[10px] text-slate-400">Progress</div></div>
          </div>
        </div>
      ),
      5: (
        <div className="rounded-lg bg-white p-4">
          <div className="text-xs font-medium text-slate-500">AI Report - Jan 2026</div>
          <div className="mt-2 space-y-1">
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="h-2 w-4/5 rounded bg-slate-100" />
            <div className="h-2 w-3/4 rounded bg-slate-100" />
          </div>
          <div className="mt-3"><span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">Generated</span></div>
        </div>
      ),
    },
  }

  return mockups[slug]?.[featureIndex] || (
    <div className="flex h-32 items-center justify-center text-sm text-slate-400">Feature preview</div>
  )
}
