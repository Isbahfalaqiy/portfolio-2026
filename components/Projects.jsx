'use client'

const projects = [
  
    
  
  {
    category: 'frontend',
    image: '/images/projects/sdn05citayam.jpg',
    tags: ['React', 'Tailwind'],
    title: 'SDN 5 Citayam',
    desc: 'Landing page for SDN 5 Citayam school project.',
    live: 'https://sdn-05-citayam.vercel.app/',
    github: 'https://github.com/Isbahfalaqiy/sdn-5-citayam',
    status: 'Completed',
  },
  {
    category: 'frontend',
    image: '/images/projects/gofitmeal.jpg',
    tags: ['React', 'Tailwind'],
    title: 'GoFitMeal',
    desc: 'Landing page for GoFitMeal service.',
    live: 'https://gofitmeal.vercel.app/',
    github: 'https://github.com/Isbahfalaqiy/GitFitMeal',
    status: 'Completed',
  },
  {
    category: 'frontend',
    image: '/images/projects/storguard.jpg',
    bg: 'linear-gradient(135deg,#f8f8f0,#e0e0c8)',
    tags: ['React', 'Tailwind'],
    title: 'storguard',
    desc: 'Landing page for storguard project.',
    live: 'https://stor-guard.vercel.app/',
    github: 'https://github.com/Isbahfalaqiy/StockGuard',
    status: 'Completed', // ⏳
  },
  {
    category: 'frontend',
    image: '/images/projects/mapuin.jpg',
    bg: 'linear-gradient(135deg,#f0f8ff,#d0e8f8)',
    tags: ['HTML', 'CSS', 'JavaScript'],
    title: 'Navigasi UIN Jakarta',
    desc: 'Web app for navigation at UIN Jakarta.',
    live: 'https://navigasi-uinjkt.vercel.app/',
    github: 'https://github.com/Isbahfalaqiy/Navigasi-UINJKT',
    status: 'Completed',
  },
  {
    category: 'fullstack',
    image: '/images/projects/obe.jpg',
    bg: 'linear-gradient(135deg,#fdf5e8,#f5e4c8)',
    tags: ['Laravel', 'MySQL'],
    title: 'OBE Evaluation System',
    desc: 'System for evaluating CPL outcomes.',
    live: 'https://layanan-obe.uinjakarta.id/',
    status: 'Completed',
  },
  {
    category: 'AWSResearchAI',
    image: '/images/projects/aws.jpg',
    bg: 'linear-gradient(135deg,#fdf5e8,#f5e4c8)',
    tags: ['Laravel', 'MySQL'],
    title: 'AWS Research AI',
    desc: 'AI-powered research assistant for academic research.',
    status: 'Completed',
  },
  {
    category: 'fullstack',
    image: '/images/projects/web-kost.jpg',
    bg: 'linear-gradient(135deg,#f1ecff,#e3dbff)',
    tags: ['Laravel', 'REST API'],
    title: 'Web-Kost Booking System',
    desc: 'Fullstack app for booking boarding houses.',
    live: 'https://web-kost-yuk.my.id/',
    github: 'https://github.com/Isbahfalaqiy/web-kost',
    status: 'Completed',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >

              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                p.status === 'Completed'
                  ? 'bg-green-500 text-white'
                  : 'bg-yellow-400 text-black'
              } z-30 shadow`}>
                {p.status}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10"></div>

              <div className="relative z-20">
                {/* Image or Emoji */}
                <div
                  className="h-40 flex items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110 overflow-hidden"
                  style={{ background: p.bg }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    p.emoji
                  )}
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold transition group-hover:bg-white group-hover:text-black"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-2 transition group-hover:text-white">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed transition group-hover:text-gray-300">
                    {p.desc}
                  </p>
                </div>

                <div className="px-5 py-3 border-t border-gray-200 flex justify-between text-sm font-medium transition group-hover:border-gray-700">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition group-hover:text-white"
                  >
                    View Live →
                  </a>
                  {p.github && (
             <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition group-hover:text-white"
            >
              GitHub ↗
            </a>
          )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}