'use client'
import { motion } from "motion/react"
import AnimatedSection from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  description: string;
  image?: string;
}


export function Portfolio() {
  const SERVICES: PortfolioItem[] = [
    {
      title: "CruceIDSE",
      description: "Aplicación web diseñada para comparar información de forma rápida y precisa, optimizando procesos internos y reduciendo errores operativos. Enfocada en rendimiento, claridad de datos y experiencia de usuario.",
      image: '/images/cruceidse-thumbnail.png'
    },
    {
      title: "RedHome Inmobiliaria",
      description: "Sitio web inmobiliario integrado con EasyBroker, que permite mostrar propiedades actualizadas en tiempo real, gestionar leads descargar fichas y ofrecer una experiencia de búsqueda ágil, visual y optimizada para SEO.",
      image: '/images/redhome-realty.jpg'
    },
    {
      title: "QuickBite",
      description: "QuickBite es una plataforma de pedidos rápidos para restaurantes y usuarios, con menú en tiempo real, pagos seguros y seguimiento de entrega. Optimiza la operación, reduce tiempos de espera y mejora la experiencia de compra desde móvil y web.",
      image: '/images/quickbite.jpeg'
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
            Nuestro <span className="text-yellow-400">portafolio</span>
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-text mb-8  w-full md:w-3/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Casos donde diseño y ejecución se convierten en producto.
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
                      alt="item.title"
                      width={640}
                      height={360}
                      unoptimized={!item.image}
                      className="rounded-xl max-h-[182px] w-full bg-yellow-400"
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
