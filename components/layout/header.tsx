import Link from "next/link"
<<<<<<< HEAD

export function Header() {
  return (
    <header className="bg-black text-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <Link href="/work" className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium font-text">
            Our Work
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition-colors font-text">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors font-text">
            Contact
          </Link>
        </nav>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">V</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-white hover:text-yellow-400 transition-colors font-text">
            Login
          </Link>
          <Link 
            href="/quote" 
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-300 transition-colors font-text"
          >
            Get A Quote
          </Link>
=======
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Identia Studio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
>>>>>>> 699073b7ba59fa2b248817dbeb70551148cffede
        </div>
      </div>
    </header>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 699073b7ba59fa2b248817dbeb70551148cffede
