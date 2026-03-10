

const services = [
  {
    icon: '💻',
    title: 'Fullstack Web Development',
    desc: 'Building complete web applications from backend to frontend using Laravel, React, and modern web technologies.',
  },
  {
    icon: '⚛️',
    title: 'Frontend Development',
    desc: 'Creating responsive and interactive user interfaces using React, JavaScript, and TailwindCSS.',
  },
  {
    icon: '🗄️',
    title: 'Backend Development',
    desc: 'Developing secure and scalable backend systems with Laravel, PHP, and RESTful APIs.',
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    desc: 'Maintaining, improving, and optimizing web applications to ensure performance and stability.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-8 py-20 max-w-6xl mx-auto">

      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
        <span className="w-6 h-0.5 bg-black"></span>
        What I Do
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {services.map((s) => (
          <div
            key={s.title}
            className="group relative bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-2xl"
          >

            {/* Top line animation */}
            <div className="absolute top-0 left-0 h-0.75 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>

            {/* Icon */}
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {s.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}