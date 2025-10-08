import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center">
          <Image
            src="/images/identia-studio-dark.png"
            alt="Identia Studio"
            width={600}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
