const skills = [
  'Laravel', 'React', 'PHP', 'JavaScript',
  'Tailwind CSS',  'HTML / CSS', 'Rest API','Git', 'MySQL'
]

const stats = [
  { num: '1+', label: 'Years Learning' },
  { num: '3+', label: 'Projects Done' },
  { num: 'Fullstack', label: 'Enthusiast' },
  { num: '∞', label: 'Learning & Coffee' },
]

export default function About() {
  return (
    <section id="about" className="pt-24 px-8 pb-20 max-w-6xl mx-auto">

      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
        <span className="w-6 h-0.5 bg-black rounded"></span>
        About Me
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12">
        Who Am I?
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Text */}
        <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">

          <p>
            Hi! I'm a <strong>Fullstack Web Development Enthusiast</strong> who enjoys
            building modern web applications using technologies like 
            <strong> Laravel, React, PHP, JavaScript, and Tailwind CSS</strong>.
          </p>

          <p>
            I have built several academic and personal projects such as 
            web systems, dashboards, and API-based applications. 
            I enjoy learning new technologies and continuously improving 
            my development skills.
          </p>

          <p>
            My focus is on creating clean, efficient, and scalable web 
            applications while delivering good user experience and 
            maintainable code.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium cursor-default hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                {s}
              </span>
            ))}
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              <div className="text-3xl font-extrabold mb-1">
                {s.num}
              </div>
              <div className="text-sm text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}