'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import Image, { StaticImageData } from 'next/image'
import { CheckCircle2, ChevronDown, MapPin, Zap, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { ScheduleCtaSection } from '@/components/sections/shared/schedule-cta-section'

export interface ServiceContent {
  heroTitle: string;
  heroTitle2: string;
  heroDescription: string;
  heroLong: string;
  includedTitle: string;
  includedTitle2: string;
  included: { title: string; description: string }[];
  whyUsTitle: string;
  whyUsTitle2: string;
  whyUs: { title: string; description: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  relatedLabel: string;
  relatedServices: { href: string; label: string }[];
  image: StaticImageData;
  ctaLabel: string;
}

const whyIcons = [MapPin, Zap, Code2]

export function ServicePage({ content }: { content: ServiceContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="text-white">
      {/* Hero */}
      <section className="py-24 px-8 container mx-auto max-w-screen-2xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.h1
              className="text-4xl md:text-6xl font-titles font-bold uppercase leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content.heroTitle}{' '}
              <span className="text-yellow-400">{content.heroTitle2}</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 font-text leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {content.heroDescription}
            </motion.p>
            <motion.p
              className="text-sm text-gray-400 font-text leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {content.heroLong}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">{content.ctaLabel}</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Image
              src={content.image}
              alt={content.heroTitle}
              width={220}
              height={220}
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section
        className="py-20 px-8 bg-cover"
        style={{ backgroundImage: 'url(/images/waves-section.png)' }}
      >
        <div className="container mx-auto max-w-screen-2xl">
          <motion.h2
            className="text-4xl md:text-5xl font-titles font-bold uppercase text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {content.includedTitle}{' '}
            <span className="text-yellow-400">{content.includedTitle2}</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.included.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-[#171717] rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="text-yellow-400 mb-3" size={24} />
                <h3 className="text-white font-titles font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-8 container mx-auto max-w-screen-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-titles font-bold uppercase text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {content.whyUsTitle}{' '}
          <span className="text-yellow-400">{content.whyUsTitle2}</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.whyUs.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length]
            return (
              <motion.div
                key={item.title}
                className="bg-[#171717] rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon className="text-yellow-400 mb-3" size={24} />
                <h3 className="text-white font-titles font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 bg-[#0f0f0f]">
        <div className="container mx-auto max-w-screen-2xl">
          <motion.h2
            className="text-4xl md:text-5xl font-titles font-bold uppercase text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {content.faqTitle}
          </motion.h2>
          <div className="max-w-3xl space-y-3">
            {content.faq.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#171717] rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-titles font-semibold text-sm pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-yellow-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm font-text leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 px-8 container mx-auto max-w-screen-2xl">
        <p className="text-gray-400 font-text text-sm mb-4">{content.relatedLabel}</p>
        <div className="flex flex-wrap gap-3">
          {content.relatedServices.map((s) => (
            <Button key={s.href} variant="outline" asChild>
              <Link href={s.href as '/web-development' | '/mobile-apps' | '/ux-design' | '/branding' | '/contact' | '/referrals' | '/referrals/terms' | '/'}>{s.label}</Link>
            </Button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-20 container mx-auto max-w-screen-2xl">
        <ScheduleCtaSection />
      </section>
    </main>
  )
}
