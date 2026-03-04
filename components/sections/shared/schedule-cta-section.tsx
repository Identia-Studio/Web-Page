'use client'
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl";
import Link from "next/link"

export function ScheduleCtaSection() {
  const t = useTranslations('shared');
  const commonT = useTranslations('common');
  return (
    <section
      className="rounded-lg p-6 relative mb-6 bg-[#171717] bg-cover bg-center"
      style={{backgroundImage: 'url(/images/dark-hole.png)'}}
    >
      <div className="flex-1 flex flex-col items-center py-10 text-center">
        <h3 className="text-yellow-400 font-semibold text-xl mb-4 font-titles">
          {t('cta_section.title')}
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed font-text font-medium mb-4 ">
          {t('cta_section.description')}
        </p>

        <Button asChild>
          <Link href="#contact">
            {commonT('cta.schedule')}
          </Link>
        </Button>
      </div>
    </section>
  )
}
