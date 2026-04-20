import Nav from './components/Nav'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Proof from './components/Proof'
import Work from './components/Work'
import Process from './components/Process'
import Ticker from './components/Ticker'
import Stack from './components/Stack'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ProgressBar from './components/ProgressBar'
import BackToTop from './components/BackToTop'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <ProgressBar />
      <Cursor />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Strip />
        <Proof />
        <Work />
        <Process />
        <Ticker />
        <Stack />
        <About />
        <Services />
        <Contact />
        <CTABand />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
