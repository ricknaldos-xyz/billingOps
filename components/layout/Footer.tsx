import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function Footer() {
  const t = useTranslations('footer')

  const columns = [
    {
      title: t('product'),
      links: [
        { label: t('features'), href: '/#features' },
        { label: t('pricing'), href: '/#pricing' },
        { label: t('demo'), href: '/demo' },
        { label: t('docs'), href: '/docs' },
      ],
    },
    {
      title: t('company'),
      links: [
        { label: t('about'), href: '#' },
        { label: t('blog'), href: '#' },
        { label: t('contact'), href: '/demo' },
      ],
    },
    {
      title: t('legal'),
      links: [
        { label: t('privacy'), href: '#' },
        { label: t('terms'), href: '#' },
        { label: t('cookies'), href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/50">
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-light shadow-sm shadow-primary/20">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="font-display text-xl font-semibold text-slate-900">
                BillingOps
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              {t('tagline')}
            </p>
            {/* Status indicator */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              All systems operational
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold text-slate-900">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') || link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} BillingOps. {t('rights')}
          </p>
          <p className="text-sm text-slate-400">{t('builtBy')}</p>
        </div>
      </div>
    </footer>
  )
}
