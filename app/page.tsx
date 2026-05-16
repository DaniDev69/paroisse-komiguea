import Hero from '@/components/home/Hero'
import InfoBar from '@/components/home/InfoBar'
import Welcome from '@/components/home/Welcome'
import NewsGrid from '@/components/home/NewsGrid'
import FeatureTiles from '@/components/home/FeatureTiles'
import CandlesSection from '@/components/home/CandlesSection'
import Footer from '@/components/layout/Footer'
import HistoirePage from './histoire/page'
export default function Home() {
  return (
    <main>
      <Hero />
      <InfoBar />
      <Welcome />
      <NewsGrid />
      <FeatureTiles />
      <CandlesSection />
      <Footer />
    </main>
  )
}