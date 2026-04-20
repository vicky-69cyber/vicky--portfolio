import { useEffect } from 'react'

/** Observes all .reveal and .process-step elements for scroll-in animation */
export default function useReveal() {
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const processObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el))
    document.querySelectorAll('.process-step').forEach((el) => processObs.observe(el))

    return () => { revealObs.disconnect(); processObs.disconnect() }
  }, [])
}
