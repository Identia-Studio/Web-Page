'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Step {
  title: string;
  description: string;
}

export function HowItWorks() {
  const t = useTranslations('referrals')
  const commonT = useTranslations('common')

  const STEPS: Step[] = [
  {
    title: t('how_it_works.form.title'),
    description: t('how_it_works.form.description')
  },
  {
    title: t('how_it_works.contact.title'),
    description: t('how_it_works.contact.description')
  },
  {
    title: t('how_it_works.payment.title'),
    description: t('how_it_works.payment.description')
  },
]

  return (
    <section className="bg-yellow-400 text-white py-16">
      <div className="px-8 container mx-auto max-w-screen-2xl">
        <motion.h2
          className="text-4xl md:text-5xl text-white max-w-2xl font-titles uppercase font-bold mb-8 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t('how_it_works.title')} <br /> <span className="text-gray-900">{t('how_it_works.title2')}</span>
        </motion.h2>

      </div>
      <div>
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              whileHover={{opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-y border-black "
            >
              <div className="container mx-auto max-w-screen-2xl flex items-center bg-yellow-400  flex-wrap py-4">
                <h3 className="font-titles text-5xl md:text-6xl py-4 px-8 text-gray-900 ">
                  0{i+1}
                </h3>

                <h4 className="flex-1 font-titles text-4xl md:text-6xl font-semibold uppercase p-4 text-left text-gray-900">
                  {step.title}
                </h4>
                <p className="md:flex-1 text-gray-900 mb-2 py-4 px-8 text-left justify-self-end">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 px-4">
          <Button asChild variant="secondary" className="w-full md:w-auto" size="lg">
            <Link href="https://forms.gle/ptkwLj4p9Nz6wn3B8" target="_blank">
              {commonT('cta.referral')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
