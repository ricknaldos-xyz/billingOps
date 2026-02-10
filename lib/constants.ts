// Modules available for selection
export const MODULES = [
  {
    id: 'operations',
    icon: 'FileText',
    color: 'blue',
  },
  {
    id: 'finance',
    icon: 'Calculator',
    color: 'green',
  },
  {
    id: 'hr',
    icon: 'Users',
    color: 'purple',
  },
  {
    id: 'projects',
    icon: 'FolderKanban',
    color: 'orange',
  },
] as const

// Suggested bundles for common use cases
export const MODULE_BUNDLES = [
  {
    id: 'billing-pro',
    modules: ['operations', 'finance'],
    icon: 'Receipt',
  },
  {
    id: 'team-management',
    modules: ['hr', 'projects'],
    icon: 'UsersRound',
  },
  {
    id: 'consulting',
    modules: ['operations', 'projects'],
    icon: 'Briefcase',
  },
  {
    id: 'back-office',
    modules: ['finance', 'hr'],
    icon: 'Building2',
  },
] as const

// Pricing tiers
export const PRICING_TIERS = [
  {
    id: 'starter',
    monthlyPrice: 59,
    annualPrice: 49,
    includedModules: 2,
    additionalModulePrice: 29,
    users: 5,
    employees: 10,
    orgs: 1,
    features: [
      'twoModules',
      'simpleOnboarding',
      'simpleUsers',
      'simpleEmployees',
      'simpleOrg',
      'simpleReports',
      'emailSupport',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    monthlyPrice: 149,
    annualPrice: 129,
    includedModules: 4,
    additionalModulePrice: 0,
    users: -1, // unlimited
    employees: 15,
    employeePrice: 4,
    orgs: -1, // unlimited
    features: [
      'allModules',
      'simpleIntegration',
      'simpleUnlimitedUsers',
      'simpleIncludedEmployees',
      'simpleUnlimitedOrgs',
      'simpleAllReports',
      'simpleDataMigration',
      'prioritySupport',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    includedModules: 4,
    additionalModulePrice: 0,
    users: -1,
    employees: -1,
    orgs: -1,
    features: [
      'simpleEverythingGrowth',
      'simpleUnlimitedEmployees',
      'apiAccess',
      'customIntegrations',
      'simpleErpIntegrations',
      'dedicatedManager',
      'sla',
      'simpleOnboardingWhiteGlove',
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

export const FAQ_COUNT = 10
