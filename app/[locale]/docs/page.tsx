'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  ArrowLeft,
  BookOpen,
  Layers,
  Database,
  Shield,
  Workflow,
  Code2,
  BarChart3,
  Users,
  Building2,
  Receipt,
  FolderKanban,
  Globe,
  Zap,
  Lock,
  FileText,
  CreditCard,
  Mail,
  Bot,
  GitBranch,
  Server,
  Puzzle,
  Target,
  TrendingUp,
  Heart,
  DollarSign,
  Handshake,
  ChevronRight,
} from 'lucide-react'

const SECTIONS = [
  { id: 'overview', icon: BookOpen },
  { id: 'bmc', icon: Layers },
  { id: 'modules', icon: Puzzle },
  { id: 'bd', icon: Handshake },
  { id: 'finance', icon: DollarSign },
  { id: 'hr', icon: Users },
  { id: 'projects', icon: FolderKanban },
  { id: 'architecture', icon: Server },
  { id: 'dataModel', icon: Database },
  { id: 'security', icon: Shield },
  { id: 'integrations', icon: Zap },
  { id: 'api', icon: Code2 },
] as const

export default function DocsPage() {
  const t = useTranslations('docs')
  const [activeSection, setActiveSection] = useState('overview')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToHome')}
          </Link>
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sidebar nav */}
          <nav className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              {SECTIONS.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                      activeSection === section.id
                        ? 'bg-primary/5 font-medium text-primary'
                        : 'text-slate-600 hover:bg-slate-50'
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {t(`nav.${section.id}`)}
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Content */}
          <div className="min-w-0 space-y-20">
            {/* ===== PRODUCT OVERVIEW ===== */}
            <Section id="overview" icon={BookOpen} title={t('nav.overview')}>
              <Prose>
                <p>{t('overview.intro')}</p>
              </Prose>
              <InfoGrid>
                <InfoCard
                  icon={Target}
                  title={t('overview.mission.title')}
                  desc={t('overview.mission.desc')}
                />
                <InfoCard
                  icon={Globe}
                  title={t('overview.market.title')}
                  desc={t('overview.market.desc')}
                />
                <InfoCard
                  icon={TrendingUp}
                  title={t('overview.value.title')}
                  desc={t('overview.value.desc')}
                />
                <InfoCard
                  icon={Heart}
                  title={t('overview.differentiator.title')}
                  desc={t('overview.differentiator.desc')}
                />
              </InfoGrid>
              <H3>{t('overview.coreProblem')}</H3>
              <Prose>
                <p>{t('overview.coreProblemDesc')}</p>
              </Prose>
              <ul className="mt-4 space-y-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t(`overview.problems.${i}`)}
                  </li>
                ))}
              </ul>
            </Section>

            {/* ===== BUSINESS MODEL CANVAS ===== */}
            <Section id="bmc" icon={Layers} title={t('nav.bmc')}>
              <Prose>
                <p>{t('bmc.intro')}</p>
              </Prose>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'customerSegments',
                  'valuePropositions',
                  'channels',
                  'customerRelationships',
                  'revenueStreams',
                  'keyResources',
                  'keyActivities',
                  'keyPartners',
                  'costStructure',
                ].map((block) => (
                  <div
                    key={block}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h4 className="text-sm font-semibold text-primary">
                      {t(`bmc.${block}.title`)}
                    </h4>
                    <ul className="mt-3 space-y-1.5">
                      {[0, 1, 2, 3, 4].map((i) => {
                        try {
                          const text = t(`bmc.${block}.items.${i}`)
                          return text ? (
                            <li key={i} className="text-xs text-slate-600">
                              • {text}
                            </li>
                          ) : null
                        } catch {
                          return null
                        }
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* ===== MODULES OVERVIEW ===== */}
            <Section id="modules" icon={Puzzle} title={t('nav.modules')}>
              <Prose>
                <p>{t('modules.intro')}</p>
              </Prose>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  { key: 'bd', icon: Handshake, color: 'bg-blue-100 text-blue-600' },
                  { key: 'finance', icon: DollarSign, color: 'bg-green-100 text-green-600' },
                  { key: 'hr', icon: Users, color: 'bg-purple-100 text-purple-600' },
                  { key: 'projects', icon: FolderKanban, color: 'bg-amber-100 text-amber-600' },
                ].map((mod) => {
                  const Icon = mod.icon
                  return (
                    <div
                      key={mod.key}
                      className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-primary/20"
                    >
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${mod.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3 font-display text-lg font-semibold text-slate-900">
                        {t(`modules.${mod.key}.title`)}
                      </h4>
                      <p className="mt-2 text-sm text-slate-500">
                        {t(`modules.${mod.key}.desc`)}
                      </p>
                      <button
                        onClick={() => scrollTo(mod.key)}
                        className="mt-3 text-xs font-medium text-primary hover:underline"
                      >
                        {t('modules.learnMore')} →
                      </button>
                    </div>
                  )
                })}
              </div>
            </Section>

            {/* ===== BUSINESS DEVELOPMENT MODULE ===== */}
            <Section id="bd" icon={Handshake} title={t('nav.bd')}>
              <Prose><p>{t('bd.intro')}</p></Prose>
              <H3>{t('bd.pipeline')}</H3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Lead', 'Discovery', 'Feasibility', 'Proposal', 'Contract', 'Invoice', 'Payment'].map(
                  (stage, i) => (
                    <div key={stage} className="flex items-center gap-2">
                      <span className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                        {stage}
                      </span>
                      {i < 6 && <ChevronRight className="h-4 w-4 text-slate-300" />}
                    </div>
                  )
                )}
              </div>
              <FeatureList
                items={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                prefix="bd.features"
                t={t}
              />
            </Section>

            {/* ===== FINANCE MODULE ===== */}
            <Section id="finance" icon={DollarSign} title={t('nav.finance')}>
              <Prose><p>{t('finance.intro')}</p></Prose>
              <FeatureList
                items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                prefix="finance.features"
                t={t}
              />
              <H3>{t('finance.reportTypes')}</H3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-50 p-3">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-sm text-slate-700">{t(`finance.reports.${i}`)}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* ===== HR MODULE ===== */}
            <Section id="hr" icon={Users} title={t('nav.hr')}>
              <Prose><p>{t('hr.intro')}</p></Prose>
              <FeatureList
                items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                prefix="hr.features"
                t={t}
              />
              <H3>{t('hr.compliance')}</H3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">🇵🇪 {t('hr.peru.title')}</h4>
                  <ul className="mt-2 space-y-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <li key={i} className="text-xs text-slate-500">• {t(`hr.peru.items.${i}`)}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">🇺🇸 {t('hr.usa.title')}</h4>
                  <ul className="mt-2 space-y-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <li key={i} className="text-xs text-slate-500">• {t(`hr.usa.items.${i}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* ===== PROJECTS MODULE ===== */}
            <Section id="projects" icon={FolderKanban} title={t('nav.projects')}>
              <Prose><p>{t('projects.intro')}</p></Prose>
              <FeatureList
                items={[0, 1, 2, 3, 4, 5, 6, 7]}
                prefix="projects.features"
                t={t}
              />
            </Section>

            {/* ===== TECHNICAL ARCHITECTURE ===== */}
            <Section id="architecture" icon={Server} title={t('nav.architecture')}>
              <Prose><p>{t('architecture.intro')}</p></Prose>
              <H3>{t('architecture.stack')}</H3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                    <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <span className="text-sm font-medium text-slate-800">
                        {t(`architecture.techStack.${i}.name`)}
                      </span>
                      <p className="text-xs text-slate-500">
                        {t(`architecture.techStack.${i}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <H3>{t('architecture.patterns')}</H3>
              <FeatureList items={[0, 1, 2, 3, 4, 5]} prefix="architecture.patternList" t={t} />
            </Section>

            {/* ===== DATA MODEL ===== */}
            <Section id="dataModel" icon={Database} title={t('nav.dataModel')}>
              <Prose><p>{t('dataModel.intro')}</p></Prose>
              <H3>{t('dataModel.coreEntities')}</H3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-left">
                      <th className="pb-2 pr-4 font-medium text-slate-900">{t('dataModel.entity')}</th>
                      <th className="pb-2 pr-4 font-medium text-slate-900">{t('dataModel.module')}</th>
                      <th className="pb-2 font-medium text-slate-900">{t('dataModel.description')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
                      <tr key={i}>
                        <td className="py-2 pr-4 font-mono text-xs text-primary">
                          {t(`dataModel.entities.${i}.name`)}
                        </td>
                        <td className="py-2 pr-4">
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">
                            {t(`dataModel.entities.${i}.module`)}
                          </span>
                        </td>
                        <td className="py-2 text-xs text-slate-500">
                          {t(`dataModel.entities.${i}.desc`)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Prose><p className="mt-6">{t('dataModel.total')}</p></Prose>
            </Section>

            {/* ===== SECURITY ===== */}
            <Section id="security" icon={Shield} title={t('nav.security')}>
              <Prose><p>{t('security.intro')}</p></Prose>
              <FeatureList items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} prefix="security.features" t={t} />
            </Section>

            {/* ===== INTEGRATIONS ===== */}
            <Section id="integrations" icon={Zap} title={t('nav.integrations')}>
              <Prose><p>{t('integrations.intro')}</p></Prose>
              <H3>{t('integrations.erpTitle')}</H3>
              <Prose><p>{t('integrations.erpDesc')}</p></Prose>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={`erp-${i}`} className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <h4 className="text-sm font-semibold text-primary">
                      {t(`integrations.erp.${i}.name`)}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {t(`integrations.erp.${i}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
              <H3>Native Integrations</H3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rounded-xl border border-slate-200 p-4">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {t(`integrations.items.${i}.name`)}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {t(`integrations.items.${i}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ===== API REFERENCE ===== */}
            <Section id="api" icon={Code2} title={t('nav.api')}>
              <Prose><p>{t('api.intro')}</p></Prose>
              <H3>{t('api.endpoints')}</H3>
              <div className="mt-4 space-y-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                    <span
                      className={cn(
                        'shrink-0 rounded px-2 py-0.5 text-[10px] font-bold',
                        t(`api.routes.${i}.method`) === 'GET'
                          ? 'bg-green-100 text-green-700'
                          : t(`api.routes.${i}.method`) === 'POST'
                            ? 'bg-blue-100 text-blue-700'
                            : t(`api.routes.${i}.method`) === 'PATCH'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-red-100 text-red-700'
                      )}
                    >
                      {t(`api.routes.${i}.method`)}
                    </span>
                    <code className="text-xs text-slate-700">
                      {t(`api.routes.${i}.path`)}
                    </code>
                    <span className="ml-auto text-xs text-slate-400">
                      {t(`api.routes.${i}.desc`)}
                    </span>
                  </div>
                ))}
              </div>
              <H3>{t('api.auth')}</H3>
              <Prose><p>{t('api.authDesc')}</p></Prose>
              <H3>{t('api.publicRoutes')}</H3>
              <Prose><p>{t('api.publicDesc')}</p></Prose>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}

// -- Helper components --

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-display text-lg font-semibold text-slate-800">
      {children}
    </h3>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="text-sm leading-relaxed text-slate-600">{children}</div>
}

function InfoGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 grid gap-4 sm:grid-cols-2">{children}</div>
}

function InfoCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <Icon className="h-5 w-5 text-primary" />
      <h4 className="mt-2 font-medium text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-500">{desc}</p>
    </div>
  )
}

function FeatureList({
  items,
  prefix,
  t,
}: {
  items: number[]
  prefix: string
  t: (key: string) => string
}) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3">
          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <span className="text-sm font-medium text-slate-800">
              {t(`${prefix}.${i}.title`)}
            </span>
            <span className="text-sm text-slate-500">
              {' — '}
              {t(`${prefix}.${i}.desc`)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
