import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Brand from '@/components/Brand'
import Services from '@/components/Services'
import Travaux from '@/components/Travaux'
import Methode from '@/components/Methode'
import CtaBanner from '@/components/CtaBanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brand />
        <Services />
        <Travaux />
        <Methode />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
