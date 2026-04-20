import { useState, useEffect } from 'react'

const WORDS = ['landing pages.', 'pages that convert.', 'fast websites.', 'SaaS UIs.', 'clean code.']

export default function useTypewriter() {
  const [text, setText] = useState('')

  useEffect(() => {
    let wi = 0, ci = 0, deleting = false
    let timer

    function tick() {
      const word = WORDS[wi]
      if (!deleting) {
        ci++
        setText(word.slice(0, ci))
        if (ci === word.length) { deleting = true; timer = setTimeout(tick, 1400); return }
      } else {
        ci--
        setText(word.slice(0, ci))
        if (ci === 0) { deleting = false; wi = (wi + 1) % WORDS.length }
      }
      timer = setTimeout(tick, deleting ? 48 : 78)
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  return text
}
