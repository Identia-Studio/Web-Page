import Image from "next/image";
import Link from "next/link"
import { Parallax } from 'react-scroll-parallax';

export function Footer() {
  return (
    <Parallax>
      <footer className="container mx-auto max-w-screen-2xl py-12 px-8">
        <div className="flex items-center flex-col md:flex-row space-y-8">
          <div className="hidden space-y-2 md:block flex-1">
            {/* <Link
              href="tel:+529992755240"
              className="block text-gray-400 hover:text-yellow-400 transition-colors font-text"
            >
              +52 9992 75 5240
            </Link> */}
            <Link
              href="mailto:identiastudio25@gmail.com"
              className="block text-gray-400 hover:text-yellow-400 transition-colors font-text"
            >
              identiastudio25@gmail.com
            </Link>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/images/identia-studio-light.png"
              alt="Identia Studio: Light logo"
              width={200} 
              height={50} />
            <p className="text-gray-400 text-sm font-text mt-4">
              {new Date().getFullYear()}. Más que desarrollo: <strong>identidad digital.</strong>
            </p>
          </div>

          <div className="space-y-2 flex-1 text-center md:text-right">
              {/* <Link
                href="tel:+529992755240"
                className="block text-gray-400 hover:text-yellow-400 transition-colors font-text md:hidden"
              >
                +52 9992 75 5240
              </Link> */}
              <Link
                href="mailto:identiastudio25@gmail.com"
                className="block text-gray-400 hover:text-yellow-400 transition-colors font-text md:hidden"
              >
                identiastudio25@gmail.com
              </Link>
            <Link
              href="https://instagram.com/identia.studio.mid"
              className="block text-gray-400 hover:text-yellow-400 transition-colors font-text"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/identia.studio"
              className="block text-gray-400 hover:text-yellow-400 transition-colors font-text"
              target="_blank"
            >
              Facebook
            </Link>
          </div>
        </div>
      </footer>
    </Parallax>
  )
}
