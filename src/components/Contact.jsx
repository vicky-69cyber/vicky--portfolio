import { useState, useRef, useCallback } from 'react'
import { Zap, Rocket, ShieldCheck, Mail, Link, ChevronDown, Send, Loader } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_7feuo7c'
const TEMPLATE_ID = 'template_6wwxd9r'
const PUBLIC_KEY  = 'gBDaE-KCAGRA4YFjY'

const META_ITEMS = [
  { icon: <Zap size={15} />,         title: 'Fast Response',  sub: 'Usually within 2 hours' },
  { icon: <Rocket size={15} />,      title: 'Quick Start',    sub: 'Ready to kick off in 24h' },
  { icon: <ShieldCheck size={15} />, title: 'NDA Available',  sub: 'Your ideas stay private' },
]

const PROJECT_TYPES = ['Landing Page', 'SaaS UI', 'Firebase Deployment', 'Performance Optimization', 'Full Website', 'Other']
const BUDGETS       = ['Under $50', '$50 – $100', '$100 – $300', '$300 – $600', '$600 – $1,000', '$1,000+', "Let's discuss"]

function InputField({ id, label, optional, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-ink tracking-[0.01em]">
        {label}{!optional && <span className="text-accent ml-0.5" aria-hidden="true">*</span>}
        {optional && <span className="font-normal text-ink3 text-[12px] ml-1">(optional)</span>}
      </label>
      {children}
      {error && <span className="text-[11.5px] text-red-600 font-medium" role="alert">{error}</span>}
    </div>
  )
}

const inputCls = (err) =>
  `w-full px-4 py-[13px] bg-bg text-ink border rounded-[12px] font-sans text-[14px] outline-none transition-all duration-200
   hover:border-accent/30 hover:bg-card focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,68,10,0.1)] focus:bg-card appearance-none
   placeholder:text-ink3/45 ${err ? 'border-red-500 shadow-[0_0_0_3px_rgba(229,62,62,0.08)]' : 'border-ink/12'}`

export default function Contact() {
  const formRef = useRef(null)
  const [fields, setFields] = useState({ from_name: '', reply_to: '', portfolio_link: '', project_type: '', budget: '', message: '' })
  const [errors, setErrors] = useState({})
  const [charCount, setCharCount] = useState(0)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = useCallback((name, value) => {
    if (['from_name','reply_to','project_type','budget','message'].includes(name) && !value.trim())
      return 'This field is required.'
    if (name === 'reply_to' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return 'Enter a valid email address.'
    if (name === 'portfolio_link' && value && !/^https?:\/\/.+/.test(value))
      return 'Enter a valid URL starting with https://'
    return ''
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'message') {
      const trimmed = value.slice(0, 600)
      setFields((f) => ({ ...f, message: trimmed }))
      setCharCount(trimmed.length)
    } else {
      setFields((f) => ({ ...f, [name]: value }))
    }
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validate(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setErrors((er) => ({ ...er, [name]: validate(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validate all required fields
    const newErrors = {}
    Object.entries(fields).forEach(([k, v]) => {
      const err = validate(k, v)
      if (err) newErrors[k] = err
    })
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setStatus('loading')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      setFields({ from_name: '', reply_to: '', portfolio_link: '', project_type: '', budget: '', message: '' })
      setCharCount(0)
      setErrors({})
    } catch (err) {
      setStatus('error')
      console.error('EmailJS error:', err)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 bg-bg2 border-t border-ink/7 relative overflow-hidden">
      {/* Glows */}
      <div aria-hidden="true" className="absolute w-[600px] h-[600px] rounded-full top-[-150px] right-[-150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,68,10,0.05) 0%, transparent 70%)' }} />
      <div aria-hidden="true" className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] left-[-100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,68,10,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1140px] mx-auto px-6 lg:px-10 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-14 md:gap-[60px] items-start">

          {/* Left */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 font-hand text-[16px] font-bold text-accent mb-3 before:content-[''] before:w-7 before:h-0.5 before:bg-accent before:rounded">
              Get In Touch
            </div>
            <h2 id="contact-heading" className="font-sans font-extrabold text-ink mb-4 tracking-[-0.025em]" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              Let's work<br />together.
            </h2>
            <p className="text-[15.5px] text-ink2 leading-[1.65] mb-8">
              Got a project in mind? Tell me about it — I'll get back to you within 2 hours.
            </p>

            <ul className="list-none flex flex-col gap-3.5 mb-8" role="list">
              {META_ITEMS.map(({ icon, title, sub }) => (
                <li key={title} className="flex items-center gap-4 bg-card border border-ink/7 rounded-[16px] px-5 py-4 shadow-card transition-all duration-200 hover:translate-x-1 hover:border-accent/20 hover:shadow-accent">
                  <div className="w-[42px] h-[42px] flex-shrink-0 bg-accent/8 rounded-[12px] flex items-center justify-center text-accent">{icon}</div>
                  <div>
                    <div className="text-[14px] font-bold text-ink mb-0.5">{title}</div>
                    <div className="text-[12px] text-ink3 font-medium">{sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-[13px] text-ink3 mb-4 before:content-[''] before:flex-1 before:h-px before:bg-ink/12 after:content-[''] after:flex-1 after:h-px after:bg-ink/12">
              or reach me directly
            </div>
            <a href="mailto:hello.vickystudio@gmail.com"
              className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-ink2 no-underline px-5 py-3 bg-card border border-ink/12 rounded-full shadow-card transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5">
              <Mail size={14} className="text-accent" aria-hidden="true" />
              hello.vickystudio@gmail.com
            </a>
          </div>

          {/* Right — Form */}
          <div className="reveal delay-2 bg-card border border-ink/7 rounded-[24px] p-9 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <form ref={formRef} id="contactForm" onSubmit={handleSubmit} noValidate aria-label="Contact form" className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField id="cf-name" label="Your Name" error={errors.from_name}>
                  <input type="text" id="cf-name" name="from_name" value={fields.from_name}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Alex Johnson" required aria-required="true" autoComplete="name"
                    className={inputCls(errors.from_name)} />
                </InputField>
                <InputField id="cf-email" label="Email Address" error={errors.reply_to}>
                  <input type="email" id="cf-email" name="reply_to" value={fields.reply_to}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="alex@company.com" required aria-required="true" autoComplete="email"
                    className={inputCls(errors.reply_to)} />
                </InputField>
              </div>

              <InputField id="cf-portfolio" label="Your Portfolio / Website" optional error={errors.portfolio_link}>
                <div className="relative">
                  <Link size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent pointer-events-none" aria-hidden="true" />
                  <input type="url" id="cf-portfolio" name="portfolio_link" value={fields.portfolio_link}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="https://yoursite.com" autoComplete="url"
                    className={`${inputCls(errors.portfolio_link)} pl-9`} />
                </div>
              </InputField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField id="cf-type" label="Project Type" error={errors.project_type}>
                  <div className="relative">
                    <select id="cf-type" name="project_type" value={fields.project_type}
                      onChange={handleChange} onBlur={handleBlur} required aria-required="true"
                      className={inputCls(errors.project_type) + ' pr-10'}>
                      <option value="" disabled>Select a service</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={11} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink3 pointer-events-none" aria-hidden="true" />
                  </div>
                </InputField>
                <InputField id="cf-budget" label="Budget Range" error={errors.budget}>
                  <div className="relative">
                    <select id="cf-budget" name="budget" value={fields.budget}
                      onChange={handleChange} onBlur={handleBlur} required aria-required="true"
                      className={inputCls(errors.budget) + ' pr-10'}>
                      <option value="" disabled>Select budget</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <ChevronDown size={11} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink3 pointer-events-none" aria-hidden="true" />
                  </div>
                </InputField>
              </div>

              <InputField id="cf-message" label="Tell me about your project" error={errors.message}>
                <textarea id="cf-message" name="message" value={fields.message}
                  onChange={handleChange} onBlur={handleBlur}
                  rows={5} required aria-required="true"
                  placeholder="Describe your project, goals, timeline, any inspirations..."
                  className={`${inputCls(errors.message)} resize-y min-h-[130px] leading-[1.6]`} />
                <div className={`text-[11px] text-right mt-1 ${charCount > 550 ? 'text-accent' : 'text-ink3'}`}>
                  {charCount} / 600
                </div>
              </InputField>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-shimmer w-full bg-accent hover:bg-accent2 text-white py-[15px] rounded-full text-[15px] font-semibold flex items-center justify-center gap-2 shadow-accent hover:shadow-accent-lg transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading'
                  ? <><Loader size={15} className="animate-spin" /> Sending…</>
                  : <><span>Send Message</span><Send size={14} aria-hidden="true" /></>
                }
              </button>

              {status === 'success' && (
                <div role="alert" className="p-3.5 rounded-[12px] text-[14px] font-medium text-center bg-green-50 text-green-700 border border-green-200">
                  🎉 Message sent! I'll get back to you within 2 hours.
                </div>
              )}
              {status === 'error' && (
                <div role="alert" className="p-3.5 rounded-[12px] text-[14px] font-medium text-center bg-red-50 text-red-700 border border-red-200">
                  Something went wrong. Email me at hello.vickystudio@gmail.com
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
