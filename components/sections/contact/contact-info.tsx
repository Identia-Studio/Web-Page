'use client'

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/sections/shared/contact-form";
import WhatsappIcon from "@/components/icons/whatsapp_icon";
import linkedin from '@/assets/images/linkedin.svg';
import instagram from '@/assets/images/instagram.svg';
import facebook from '@/assets/images/facebook.svg';

const LAT = 20.9882745;
const LNG = -89.5316852;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

export function ContactInfo({ locale }: { locale: string }) {
  const t = useTranslations('contact');
  const c = useTranslations('common');

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 px-8">
        <div className="container mx-auto max-w-screen-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-titles uppercase font-bold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {t('hero_title')}{' '}
            <span className="text-yellow-400">{t('hero_title2')}</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl font-titles"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {t('hero_description')}
          </motion.p>
        </div>
      </section>

      {/* NAP + Form */}
      <section className="py-8 px-8 pb-0">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">

            {/* Left: NAP, hours, socials, CTAs */}
            <motion.div
              className="w-full md:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <p className="font-titles text-xl font-bold text-yellow-400 uppercase tracking-wider">
                Identia Studio
              </p>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-titles font-semibold text-white mb-1">{c('address')}</p>
                  <p className="font-titles text-gray-300 leading-relaxed">
                    Los Héroes, Mérida,<br />
                    Yucatán, México. C.P. 97306
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-titles font-semibold text-white mb-1">{c('office')}</p>
                  <a
                    href="tel:+529995446000"
                    className="font-titles text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    +52 999 544 6000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-titles font-semibold text-white mb-1">{c('email')}</p>
                  <a
                    href="mailto:hola@identiastudio.com"
                    className="font-titles text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    hola@identiastudio.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
                <div className="w-full">
                  <p className="font-titles font-semibold text-white mb-3">{t('hours_title')}</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-xs">
                    <span className="font-titles text-gray-400 text-sm">{t('weekdays')}</span>
                    <span className="font-titles text-white text-sm">{t('weekdays_hours')}</span>
                    <span className="font-titles text-gray-400 text-sm">{t('saturday')}</span>
                    <span className="font-titles text-white text-sm">{t('saturday_hours')}</span>
                    <span className="font-titles text-gray-400 text-sm">{t('sunday')}</span>
                    <span className="font-titles text-gray-500 text-sm">{t('sunday_hours')}</span>
                  </div>
                  <p className="font-titles text-gray-600 text-xs mt-3">{t('timezone')}</p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/identia-studio-mid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-400 rounded-full p-2 hover:bg-yellow-400/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Image src={linkedin} width={16} height={16} alt="LinkedIn" />
                </a>
                <a
                  href="https://instagram.com/identia.studio.mid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-400 rounded-full p-2 hover:bg-yellow-400/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Image src={instagram} width={16} height={16} alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/identia.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-400 rounded-full p-2 hover:bg-yellow-400/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Image src={facebook} width={16} height={16} alt="Facebook" />
                </a>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer">
                    {t('get_directions')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://api.whatsapp.com/send?phone=529995446000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <WhatsappIcon />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-width map */}
      <section className="mt-24 w-full h-[420px] md:h-[520px]">
        <iframe
          src={`https://maps.google.com/maps?q=${LAT},${LNG}&output=embed&z=16&hl=${locale}`}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('map_title')}
        />
      </section>
    </>
  );
}
