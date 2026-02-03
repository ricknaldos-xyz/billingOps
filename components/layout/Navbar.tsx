'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleLocale = () => {
    const next = locale === 'en' ? 'es' : 'en'
    router.replace(pathname, { locale: next })
  }

  const navLinks = [
    { href: '/#features', label: t('features') },
    { href: '/#pricing', label: t('pricing') },
    { href: '/#faq', label: t('faq') },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">B</span>
          </div>
          <span className="font-display text-xl font-semibold text-slate-900">
            BillingOps
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
          <Link
            href="/demo"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            {t('requestDemo')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLocale()
                  setMobileOpen(false)
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
              >
                <Globe className="h-4 w-4" />
                {locale === 'en' ? 'Español' : 'English'}
              </button>
              <Link
                href="/demo"
                className="mt-2 block rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('requestDemo')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
