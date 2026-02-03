export const PRICING_TIERS = [
  {
    id: 'starter',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'singleOrg',
      'basicAccounting',
      'invoicing',
      'upTo10Clients',
      'emailSupport',
    ],
    highlighted: false,
  },
  {
    id: 'professional',
    monthlyPrice: 149,
    annualPrice: 119,
    features: [
      'multiOrg',
      'fullAccounting',
      'invoicingPayments',
      'unlimitedClients',
      'hrPayroll',
      'financialReports',
      'prioritySupport',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'everythingPro',
      'apiAccess',
      'customIntegrations',
      'dedicatedManager',
      'sla',
      'onboarding',
    ],
    highlighted: false,
  },
] as const


export const COMPANY_SIZES = [
  '1-10',
  '11-50',
  '51-200',
  '200+',
] as const

export const FAQ_COUNT = 8
