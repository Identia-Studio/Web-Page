export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Arthur Kaufmann",
      title: "CEO",
      company: "",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      name: "Robert Kaufmann",
      title: "P.E.",
      company: "Chief Solutions",
      content: "Ut consectetur a dolor eu consectetur. Morbi tempus dolor scelerisque leo pretium, vel porttitor a neque. Ut consectetur a dolor eu consectetur. Morbi tempus dolor scelerisque leo pretium, vel porttitor a neque."
    },
    {
      id: 3,
      name: "Arthur Kaufmann",
      title: "P.E.",
      company: "Chief Solutions",
      content: "Ut consectetur a dolor eu consectetur. Morbi tempus dolor scelerisque leo pretium, vel porttitor a neque."
    }
  ]

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              
              <div className="pr-12">
                <h4 className="text-white font-semibold text-lg mb-1 font-titles">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm mb-3 font-text">
                  {testimonial.title}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed font-text">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
