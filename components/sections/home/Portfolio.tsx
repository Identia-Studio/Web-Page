'use client'
import { motion } from "motion/react"
import Image, { StaticImageData } from "next/image";
import AnimatedSection from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import cruceidse from '@/assets/images/cruceidse-thumbnail.png'
import redhome from '@/assets/images/redhome-realty.jpg'
import quickbite from '@/assets/images/quickbite.jpeg'
import { useTranslations } from "next-intl";

interface PortfolioItem {
  title: string;
  description: string;
  image?: StaticImageData;
}


export function Portfolio() {
  const t = useTranslations('home')

  const SERVICES: PortfolioItem[] = [
    {
      title: t('portfolio.cruceidse.title'),
      description: t('portfolio.cruceidse.description'),
      image: cruceidse
    },
    {
      title: t('portfolio.redhome.title'),
      description: t('portfolio.redhome.description'),
      image: redhome
    },
    {
      title: t('portfolio.quickBite.title'),
      description: t('portfolio.quickBite.description'),
      image: quickbite
    },
  ]

  return (
    <section
      className="text-white py-40 px-8 bg-cover"
      style={{backgroundImage: 'url(/images/waves-section.png)'}}
    >
      <div className=" container mx-auto max-w-screen-2xl">
        <div >
          <motion.h2
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold w-1/2 md:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('portfolio.title')} <span className="text-yellow-400">{t('portfolio.title2')}</span>
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-text mb-8  w-full md:w-3/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('portfolio.description')}
          </motion.p>
        </div>
        <div >
          <AnimatedSection hideSeparators>
            {SERVICES.map((item: PortfolioItem) => (
              <div key={item.title} className="rounded-lg relative shadow mb-6 h-full">
                <Card className="bg-[#171717] h-full border-0 shadow">
                  <CardHeader>
                    <Image
                      src={item.image ? item.image : 'https://placehold.co/640x360'}
                      alt={item.title}
                      width={640}
                      height={360}
                      unoptimized={!item.image}
                      className="rounded-xl max-h-[120px] w-full bg-yellow-400"
                    />
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-yellow-400 font-semibold text-xl mb-1 font-titles">
                      {item.title}
                    </h4>
                    <p className="text-white text-xs leading-relaxed font-titles">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
