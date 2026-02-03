import { Hero } from '@/components/landing/Hero'
import { LogoCloud } from '@/components/landing/LogoCloud'
import { Features } from '@/components/landing/Features'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Stats } from '@/components/landing/Stats'
import { Testimonials } from '@/components/landing/Testimonials'
import { Integrations } from '@/components/landing/Integrations'
import { Pricing } from '@/components/landing/Pricing'
import { Trust } from '@/components/landing/Trust'
import { FAQ } from '@/components/landing/FAQ'
import { CTA } from '@/components/landing/CTA'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Integrations />
      <Pricing />
      <Trust />
      <FAQ />
      <CTA />
    </>
  )
}
