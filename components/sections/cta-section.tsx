export function CTASection() {
  const highlights = [
    { text: "Seasoned pros in building big ideas", position: "above" },
    { text: "A full service studio", position: "above" },
    { text: "Partners, not just vendors", position: "above" },
    { text: "Clients love passionate pros", position: "above" }
  ]

  return (
    <section className="bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="relative">
          <div className="absolute -top-16 left-0 right-0 flex justify-center space-x-8 flex-wrap">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-md text-xs font-medium transform -rotate-1 font-text">
              Seasoned pros in building big ideas
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-md text-xs font-medium transform rotate-1 font-text">
              A full service studio
            </span>
          </div>
          <div className="absolute -top-8 left-0 right-0 flex justify-center space-x-8 flex-wrap">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-md text-xs font-medium transform -rotate-1 font-text">
              Partners, not just vendors
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-md text-xs font-medium transform rotate-1 font-text">
              Clients love passionate pros
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold leading-tight font-titles">
            LET&apos;S GET THE MOST OUT OF YOUR BRAND
          </h2>
        </div>
      </div>
    </section>
  )
}
