import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import StatsStrip from '@/components/StatsStrip'
import IntroSection from '@/components/IntroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyPastroSection from '@/components/WhyPastroSection'
// import PortfolioSection from '@/components/PortfolioSection'
// import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <StatsStrip />
        <IntroSection />
        <ServicesSection />
        <WhyPastroSection />
        {/* <PortfolioSection /> */}
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
