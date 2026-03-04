'use client'
import { Button } from "@/components/ui/button";
import { Check, Dot } from "lucide-react"
import { motion, Variants } from "motion/react"
import { useTranslations } from "next-intl";
import {Link} from "@/i18n/navigation";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export function Benefits() {
  const t = useTranslations('referrals')
  const commonT = useTranslations('common')

  const BENEFITS: string[] = t.raw('benefits.benefits')

  const RULES: string[] = t.raw('benefits.rules')

  return (
    <section
      className="text-white py-40 px-8 bg-cover"
      style={{backgroundImage: 'url(/images/waves-section.png)'}}
    >
      <div className=" container mx-auto max-w-screen-2xl">
        <div >
          <motion.h2
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
           { t('benefits.title')} <br /> <span className="text-yellow-400">{t('benefits.title2')}</span>
          </motion.h2>

        </div>
        <div className="grid md:grid-cols-2 my-10">
          <motion.ul
            className="flex flex-col items-start gap-2 mb-4 text-gray-300 font-text leading-relaxed shadow rounded-lg border p-2 font-medium"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {BENEFITS.map((benefit) => (
              <motion.li
                variants={item}
                key={benefit}
                className="lg:flex-1 text-gray-300 text-base lg:text-base font-text leading-relaxed  p-2 font-medium flex items-center justify-center gap-2">
                  <Check className="text-yellow-400"/>
                  {benefit}
                </motion.li>
            ))}
          </motion.ul>
        </div>

        <div >
          <motion.h2
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            { t('benefits.rules_title')} <br /> <span className="text-yellow-400">{ t('benefits.rules_title2')}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 mt-10">
          <motion.ul
            className="flex flex-col items-start gap-2 mb-4 text-gray-300 font-text leading-relaxed shadow rounded-lg border p-2 font-medium"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {RULES.map((rule) => (
              <motion.li
                variants={item}
                key={rule}
                className="lg:flex-1 text-gray-300 text-base lg:text-base font-text leading-relaxed  p-2 font-medium flex items-center justify-center gap-2">
                  <Dot className="text-yellow-400" />
                  {rule}
                </motion.li>
            ))}
          </motion.ul>
        </div>

        <Button asChild className="mt-10">
          <Link href="/referrals/terms">
            { commonT('cta.terms')}
          </Link>
        </Button>
      </div>
    </section>
  )
}
