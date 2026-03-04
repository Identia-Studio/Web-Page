'use client'

import WhatsappIcon from "@/components/icons/whatsapp_icon"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function Hero() {
  const t = useTranslations('referrals')
  const commonT = useTranslations('common')

  return (
    <section className="pb-16 px-8 container mx-auto max-w-screen-2xl">
      <div className=" min-h-[600px] flex justify-center items-center">
        <motion.div
          className="w-full md:w-1/2"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('title')} <span className="text-yellow-400">{t('title2')}</span> {t('title3')}
          </motion.h1>
          
          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-titles mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('subtext')}
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-titles mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('description')}
            <br />
            {t('description2')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="https://forms.gle/ptkwLj4p9Nz6wn3B8" target="_blank">
                {commonT('cta.referral')}
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="https://api.whatsapp.com/send?phone=529995446000&text=Hola%2C+quiero+informacion+del+programa+de+referidos." target="_blank">
                {commonT('cta.whatsapp')}
                <WhatsappIcon />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
