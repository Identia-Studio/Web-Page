'use client'

import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="pb-16 px-8 container mx-auto max-w-screen-2xl">
      <div className=" min-h-[400px] flex justify-center items-center">
        <motion.div
          className="w-full md:w-2/3"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
           Términos y Políticas de <span className="text-yellow-400">uso</span> del programa de referidos
          </motion.h1>

          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-titles mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Última actualización: 15 de Febrero del 2026
          </motion.p>

        </motion.div>

      </div>

      <div>
        <h2 className="my-8 font-bold font-titles text-yellow-400">1. Descripción del programa</h2>
        <p className="mb-2 font-text">El Programa de Referidos de <strong>Identia Studio</strong> permite a personas externas recomendar potenciales clientes interesados en nuestros servicios digitales, a cambio de una comisión económica por cada proyecto que se concrete bajo las condiciones establecidas en este documento.</p>
        <p className="mb-2 font-text">El referidor <strong>no actúa como empleado, representante comercial ni socio</strong> de Identia Studio.</p>

        <h2 className="my-8 font-bold font-titles text-yellow-400">2. Elegibilidad</h2>
        <p className="mb-2 font-text">Puede participar cualquier persona mayor de edad que:</p>

        <ul className="list-disc font-text ml-10">
          <li>Proporcione información veraz</li>
          <li>Acepte estos términos</li>
          <li>Refiera contactos con interés real en los servicios de Identia Studio</li>
        </ul>

        <p className="mb-2 font-text mt-8">Identia Studio se reserva el derecho de aceptar o rechazar cualquier referido sin necesidad de justificación.</p>

        <h2 className="my-8 font-bold font-titles text-yellow-400">3. Qué se considera un referido válido</h2>
        <p className="mb-2 font-text">Un referido será considerado válido cuando:</p>

        <ul className="list-disc font-text ml-10">
          <li>El contacto no sea un cliente activo ni un lead en conversación previa</li>
          <li>El cliente acepte ser contactado por Identia Studio</li>
          <li>Exista un interés real en alguno de nuestros servicios</li>
          <li>El proyecto avance hasta el cierre comercial</li>
        </ul>

        <p className="mb-2 font-text my-8">No se considerarán válidos:</p>

        <ul className="list-disc font-text ml-10">
          <li>Contactos sin consentimiento</li>
          <li>Leads duplicados</li>
          <li>Referencias genéricas sin información de contacto</li>
          <li>Proyectos que no se concreten</li>
        </ul>

        <h2 className="my-8 font-bold font-titles text-yellow-400">4. Proceso del referido</h2>
        <p className="mb-2 font-text">El flujo del programa es el siguiente:</p>

        <ol className="list-decimal font-text ml-10">
          <li>El referidor comparte los datos del contacto mediante el formulario o canal autorizado</li>
          <li>Identia Studio valida el lead</li>
          <li>Identia Studio contacta al cliente y gestiona todo el proceso comercial</li>
          <li>En caso de cierre y pago de anticipo, se genera la comisión correspondiente</li>
        </ol>

        <h2 className="my-8 font-bold font-titles text-yellow-400">5. Comisión y forma de pago</h2>

        <ul className="list-disc font-text ml-10">
          <li>La comisión será del <strong>5% al 15%</strong> del monto total del proyecto, según el tipo de servicio y complejidad</li>
          <li>El porcentaje final será definido por Identia Studio</li>
          <li>El pago de la comisión se realiza <strong>únicamente después de que el cliente haya pagado su anticipo</strong></li>
          <li>El pago se efectuará mediante transferencia bancaria u otro medio acordado</li>
        </ul>

        <p className="mb-2 font-text mt-8">No se generan comisiones por:</p>

        <ul className="list-disc font-text ml-10">
          <li>Proyectos cancelados</li>
          <li>Propuestas no aceptadas</li>
          <li>Servicios no facturados</li>
        </ul>

        <h2 className="my-8 font-bold font-titles text-yellow-400">6. Limitaciones del referidor</h2>
        <p className="mb-2 font-text">El referidor <strong>no está autorizado</strong> a:</p>

        <ul className="list-disc font-text ml-10">
          <li>Negociar precios</li>
          <li>Prometer tiempos de entrega</li>
          <li>Ofrecer descuentos</li>
          <li>Definir alcances</li>
          <li>Representar a Identia Studio ante el cliente</li>
        </ul>

        <p className="mb-2 font-text mt-8">Toda la comunicación comercial, técnica y contractual será responsabilidad exclusiva de Identia Studio.</p>

        <h2 className="my-8 font-bold font-titles text-yellow-400">7. Confidencialidad y datos</h2>
        <p className="mb-2 font-text">El referidor se compromete a:</p>

        <ul className="list-disc font-text ml-10">
          <li>Compartir únicamente datos de contactos que hayan autorizado el uso de su información</li>
          <li>No utilizar información de Identia Studio con fines distintos al programa</li>
        </ul>

        <p className="mb-2 font-text mt-8">Identia Studio se compromete a tratar los datos conforme a buenas prácticas de privacidad.</p>

        <h2 className="my-8 font-bold font-titles text-yellow-400">8. Terminación del programa</h2>
        <p className="mb-2 font-text">Identia Studio puede:</p>

        <ul className="list-disc font-text ml-10">
          <li>Modificar estos términos en cualquier momento</li>
          <li>Suspender o cancelar el programa sin previo aviso</li>
          <li>Desactivar a un referidor que incumpla estas políticas</li>
        </ul>

        <p className="mb-2 font-text mt-8">Las comisiones pendientes por proyectos ya cerrados serán respetadas.</p>

        <h2 className="my-8 font-bold font-titles text-yellow-400">9. Aceptación de términos</h2>
        <p className="mb-2 font-text">La participación en el Programa de Referidos implica la <strong>aceptación total de estos Términos y Políticas de Uso.</strong></p>
      </div>
    </section>
  )
}
