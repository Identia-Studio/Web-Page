import Link from "next/link"

export function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 font-titles">Navigation</h3>
            <div className="space-y-2">
              <Link href="/work" className="block text-gray-400 hover:text-yellow-400 transition-colors font-text">
                Our Work
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-yellow-400 transition-colors font-text">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-yellow-400 transition-colors font-text">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <h2 className="text-4xl font-bold text-white mb-2 font-titles">
                Always
              </h2>
              <p className="text-gray-400 text-sm font-text">
                2021. We believe in the craft.
              </p>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 font-titles">Connect</h3>
            <div className="space-y-2">
              <Link href="/login" className="block text-gray-400 hover:text-yellow-400 transition-colors font-text">
                Login
              </Link>
              <Link href="https://instagram.com" className="block text-gray-400 hover:text-yellow-400 transition-colors font-text">
                Instagram
              </Link>
              <Link href="https://dribbble.com" className="block text-gray-400 hover:text-yellow-400 transition-colors font-text">
                Dribbble
              </Link>
            </div>
          </div>
=======
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="#"
              className="font-medium underline underline-offset-4"
            >
              Identia Studio
            </Link>
            . All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
>>>>>>> 699073b7ba59fa2b248817dbeb70551148cffede
        </div>
      </div>
    </footer>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 699073b7ba59fa2b248817dbeb70551148cffede
