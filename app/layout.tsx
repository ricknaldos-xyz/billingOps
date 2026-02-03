import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BillingOps — Streamline Your Billing & Operations',
  description:
    'All-in-one platform for billing, accounting, HR, and client management. From leads to payments, automated.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
