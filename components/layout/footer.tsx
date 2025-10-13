import Link from "next/link"

export function Footer() {
  return (
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
        </div>
      </div>
    </footer>
  )
}