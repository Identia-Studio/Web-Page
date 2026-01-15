import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { Parallax } from 'react-scroll-parallax';
import ContactForm from "../sections/shared/contact-form";

export function Footer() {
  return (
    <Parallax>
      <footer className="container mx-auto max-w-screen-2xl py-12 px-8" id="contact">
        <div className="flex flex-col md:flex-row space-y-8">
          <div className="w-full md:w-2/3 mb-12 md:mb-0">
            <Image
              src="/images/identia-studio-light.png"
              alt="Identia Studio: Light logo"
              width={200} 
              height={50} />

            
            <div className="flex items-start gap-3 mt-8">
              <MapPin className="text-yellow-400 w-[16px]" />
              <div className="grid gap-2">
                <p className="block text-yellow-400 transition-colors font-titles">
                  Dirección
                </p>
                <Link
                  href="tel:+529995446000"
                  className="block text-white hover:text-yellow-400 transition-colors font-titles"
                >
                  Los Héroes, Yucatán, México. C.P. 97306.
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneCallIcon className="text-yellow-400 w-[16px]" />
              <div className="grid gap-2">
                <p className="block text-yellow-400 transition-colors font-titles">
                  Oficina
                </p>
                <Link
                  href="tel:+529995446000"
                  className="block text-white hover:text-yellow-400 transition-colors font-titles"
                >
                  +52 999 544 6000
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon className="text-yellow-400 w-[16px]" />
              <div className="grid gap-2">
                <p className="block text-yellow-400 transition-colors font-titles">
                  Correo Electrónico
                </p>
                <Link
                  href="mailto:identiastudio25@gmail.com"
                  className="block text-white hover:text-yellow-400 transition-colors font-titles"
                >
                  identiastudio25@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Link
                href="https://www.linkedin.com/company/identia-studio-mid"
                className="block border border-yellow-400 rounded-full p-2 text-yellow-400"
                target="_blank"
              >
                <Image
                  src='/images/linkedin.svg'
                  width={16}
                  height={16}
                  alt="Identia Studio: LinkedIn @identia-studio-mid"
                  className="fill-yellow-400 fill-current"
                />
              </Link>

              <Link
                href="https://instagram.com/identia.studio.mid"
                className="block border border-yellow-400 rounded-full p-2"
                target="_blank"
              >
                <Image
                  src='/images/instagram.svg'
                  width={16}
                  height={16}
                  alt="Identia Studio: Instagram @identia.studio.mid"
                />
              </Link>
              <Link
                href="https://www.facebook.com/identia.studio"
                className="block border border-yellow-400 rounded-full p-2"
                target="_blank"
              >
                <Image
                  src='/images/facebook.svg'
                  width={16}
                  height={16}
                  alt="Identia Studio: Facebook @identia.studio"
                />
              </Link>

            </div>
          </div>

          <div className="w-full md:w-1/3">
            <ContactForm />
          </div>

        </div>
        <div className="w-full">
            <p className="text-gray-400 text-sm font-titles mt-4 text-center">
            {new Date().getFullYear()} &copy; <strong>Identidad digital.</strong>
          </p>
        </div>
      </footer>
    </Parallax>
  )
}
