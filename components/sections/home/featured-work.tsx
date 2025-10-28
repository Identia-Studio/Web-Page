import Image from "next/image"

export function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: "Sonder",
      description: "Modern furniture, pottery, tools",
      image: "/api/placeholder/400/300",
      alt: "Sonder project"
    },
    {
      id: 2,
      title: "FilmLab",
      description: "Our creative approach to film & video",
      image: "/api/placeholder/400/300",
      alt: "FilmLab project"
    },
    {
      id: 3,
      title: "Sonder",
      description: "Modern furniture, pottery, tools",
      image: "/api/placeholder/400/300",
      alt: "Sonder project"
    },
    {
      id: 4,
      title: "FilmLab",
      description: "Our creative approach to film & video",
      image: "/api/placeholder/400/300",
      alt: "FilmLab project"
    },
    {
      id: 5,
      title: "Sonder",
      description: "Modern furniture, pottery, tools",
      image: "/api/placeholder/400/300",
      alt: "Sonder project"
    },
    {
      id: 6,
      title: "FilmLab",
      description: "Our creative approach to film & video",
      image: "/api/placeholder/400/300",
      alt: "FilmLab project"
    }
  ]

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold font-titles">Featured Work</h2>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-300 transition-colors font-text">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Project Image</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors font-titles">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm font-text">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors font-text">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
