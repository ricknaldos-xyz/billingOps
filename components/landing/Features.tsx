'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Workflow,
  BookOpen,
  Users,
  FolderKanban,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const TABS = [
  { id: 'operations', icon: Workflow, featureCount: 6 },
  { id: 'finance', icon: BookOpen, featureCount: 6 },
  { id: 'hr', icon: Users, featureCount: 8 },
  { id: 'projects', icon: FolderKanban, featureCount: 6 },
]

export function Features() {
  const t = useTranslations('features')
  const [activeTab, setActiveTab] = useState('operations')

  return (
    <section id="features" className="bg-white py-24 sm:py-32">
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

        {/* Pill tabs with animated indicator */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-2xl bg-slate-100/80 p-1.5">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-white shadow-md"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={cn('relative z-10 flex items-center gap-2', isActive ? 'text-primary' : 'text-slate-600')}>
                    <Icon className="h-4 w-4" />
                    {t(`tabs.${tab.id}`)}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {TABS.map((tab) => {
            if (tab.id !== activeTab) return null
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                {/* Left — description */}
                <div>
                  <h3 className="font-display text-3xl font-bold text-slate-900">
                    {t(`${tab.id}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {t(`${tab.id}.description`)}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {Array.from({ length: tab.featureCount }, (_, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <div>
                          <span className="font-medium text-slate-800">
                            {t(`${tab.id}.features.${i}.title`)}
                          </span>
                          <span className="text-slate-500">
                            {' — '}
                            {t(`${tab.id}.features.${i}.desc`)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/features/${tab.id}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    {t('learnMore')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right — mockup with enhanced glow */}
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/8 to-accent/8 blur-2xl" />
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-2xl shadow-slate-900/[0.06]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="rounded-xl bg-gradient-to-b from-slate-50 to-slate-50/50 p-6">
                      <TabMockup tabId={tab.id} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

function TabMockup({ tabId }: { tabId: string }) {
  const mockups: Record<string, React.ReactNode> = {
    operations: (
      <div className="space-y-3">
        {/* Pipeline visualization */}
        <div className="flex gap-2">
          {['Lead', 'Proposal', 'Contract', 'Invoice', 'Paid'].map(
            (stage, i) => (
              <div
                key={stage}
                className={cn(
                  'flex-1 rounded-lg p-3 text-center text-xs font-medium',
                  i < 3
                    ? 'bg-primary/10 text-primary'
                    : i === 3
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-green-100 text-green-700'
                )}
              >
                {stage}
                <div className="mt-1 text-lg font-bold">
                  {[12, 8, 5, 3, 24][i]}
                </div>
              </div>
            )
          )}
        </div>
        {/* Recent activity */}
        <div className="space-y-2">
          {[
            { name: 'Acme Corp', status: 'Contract Signed', color: 'bg-green-100 text-green-700' },
            { name: 'TechStart Inc', status: 'Proposal Sent', color: 'bg-blue-100 text-blue-700' },
            { name: 'Global LLC', status: 'Invoice Overdue', color: 'bg-red-100 text-red-700' },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg bg-white p-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-200" />
                <span className="text-sm font-medium text-slate-700">
                  {item.name}
                </span>
              </div>
              <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${item.color}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    finance: (
      <div className="space-y-3">
        {/* Chart */}
        <div className="rounded-lg bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Revenue vs Expenses</span>
            <span className="text-xs text-slate-400">2026</span>
          </div>
          <div className="flex items-end gap-2">
            {[
              [60, 40], [70, 45], [55, 50], [80, 35], [90, 42], [85, 38],
              [75, 48], [95, 40], [88, 44], [92, 36], [78, 42], [100, 45],
            ].map(([rev, exp], i) => (
              <div key={i} className="flex flex-1 items-end gap-0.5">
                <div
                  className="flex-1 rounded-t-sm bg-primary/30"
                  style={{ height: `${rev}px` }}
                />
                <div
                  className="flex-1 rounded-t-sm bg-red-300/50"
                  style={{ height: `${exp}px` }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Journal entry */}
        <div className="rounded-lg bg-white p-3 text-xs">
          <div className="mb-2 font-medium text-slate-700">Journal Entry #247</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-slate-500">
              <span className="pl-2">Cash</span>
              <span className="font-mono">$12,500.00</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span className="pl-6">Revenue</span>
              <span className="font-mono text-right">$12,500.00</span>
            </div>
          </div>
        </div>
      </div>
    ),
    hr: (
      <div className="space-y-3">
        {/* Employee cards */}
        <div className="grid grid-cols-3 gap-2">
          {['Active', 'On Leave', 'New Hires'].map((label, i) => (
            <div key={label} className="rounded-lg bg-white p-3 text-center">
              <div className="text-xl font-bold text-slate-800">
                {[48, 3, 5][i]}
              </div>
              <div className="text-[10px] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
        {/* Employee list */}
        <div className="space-y-2">
          {[
            { name: 'Maria Garcia', role: 'Engineering', status: 'Active' },
            { name: 'Carlos Lopez', role: 'Marketing', status: 'Active' },
            { name: 'Ana Torres', role: 'Finance', status: 'On Leave' },
          ].map((emp) => (
            <div
              key={emp.name}
              className="flex items-center gap-3 rounded-lg bg-white p-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {emp.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-700">{emp.name}</div>
                <div className="text-[10px] text-slate-400">{emp.role}</div>
              </div>
              <span
                className={cn(
                  'rounded-md px-2 py-0.5 text-[10px] font-medium',
                  emp.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                )}
              >
                {emp.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-3">
        {/* Project cards */}
        {[
          { name: 'Website Redesign', progress: 78, health: 'On Track' },
          { name: 'Mobile App v2', progress: 45, health: 'At Risk' },
          { name: 'API Integration', progress: 92, health: 'On Track' },
        ].map((project) => (
          <div key={project.name} className="rounded-lg bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                {project.name}
              </span>
              <span
                className={cn(
                  'rounded-md px-2 py-0.5 text-[10px] font-medium',
                  project.health === 'On Track'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                )}
              >
                {project.health}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-xs font-medium text-slate-500">
                {project.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  }

  return mockups[tabId] || null
}
