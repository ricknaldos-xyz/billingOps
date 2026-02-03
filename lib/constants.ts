export const PRICING_TIERS = [
  {
    id: 'starter',
    monthlyPrice: 69,
    annualPrice: 59,
    perEmployee: 0,
    includedEmployees: 10,
    features: [
      'singleOrg',
      'basicAccounting',
      'invoicing',
      'upTo10Users',
      'emailSupport',
    ],
    highlighted: false,
  },
  {
    id: 'professional',
    monthlyPrice: 199,
    annualPrice: 169,
    perEmployee: 4,
    includedEmployees: 15,
    features: [
      'multiOrg',
      'fullAccounting',
      'invoicingPayments',
      'unlimitedClients',
      'hrPayroll',
      'includedEmployees',
      'financialReports',
      'dataMigration',
      'prioritySupport',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    perEmployee: 0,
    includedEmployees: 0,
    features: [
      'everythingPro',
      'unlimitedEmployees',
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
