'use client'

const certificates = [
  {
    image: '/images/certificate/aws.jpg',
    title: 'Pengembangan ChatBot AI Penelitian Berbasis Web',
    issuer: 'AWS Inovasi Global Sejahtera',
    date: '2026',
    desc: 'Pengembangan asisten AI interaktif berbasis web untuk kebutuhan penelitian akademik.',
    credentialUrl: 'https://drive.google.com/file/d/1Exe5HjImirYHZPC4i-L5zI7ltLHwSaGe/view?usp=drive_link',
    status: 'Verified',
  },
  {
    image: '/images/certificate/javascript2.jpg',
    title: 'JavaScript Intermediate',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    desc: 'Penerapan fitur modern ES6+, pemrograman asinkron (Promises & Async/Await), dan integrasi API.',
    credentialUrl: 'https://drive.google.com/file/d/1cyNCFrcxEcyjCEDwknOMhSEbO2nib_Rx/view?usp=drive_link',
    status: 'Verified',
  },
  {
    image: '/images/certificate/sd.jpg',
    title: 'Pengembangan Aplikasi Perpustakaan Berbasis Web',
    issuer: 'SDM 05 Citayam',
    date: '2025',
    desc: 'Perancangan dan pembangunan sistem manajemen perpustakaan sekolah berbasis web.',
    credentialUrl: 'https://drive.google.com/file/d/1ZOLwqcNq-DF6KJwTAxu2XS32C-eahXx5/view?usp=drive_link',
    status: 'Verified',
  },
  {
    image: '/images/certificate/dicoding.jpg',
    title: 'Fullstack Web Developer',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    desc: 'Dasar pengembangan web responsif menggunakan HTML, CSS, dan JavaScript interaktif.',
    credentialUrl: 'https://drive.google.com/file/d/1SQ2taV5wOgc41gTVDW22CpeG1rzhDl-y/view?usp=drive_link',
    status: 'Verified',
  },
  {
    image: '/images/certificate/javascript1.jpg',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    desc: 'Pemahaman sintaks dasar JavaScript, struktur data, paradigma OOP, dan pemrograman fungsional.',
    credentialUrl: 'https://drive.google.com/file/d/1osgZzkcmTSULSnLUloIccADWIBqZ2fgC/view?usp=drive_link',
    status: 'Verified',
  },
  {
    image: '/images/certificate/ai.jpg',
    title: 'AI Basic: Overview of AI',
    issuer: 'Huawei',
    date: '2023',
    desc: 'Pemahaman konsep dasar kecerdasan buatan, machine learning, dan implementasinya.',
    credentialUrl: 'https://drive.google.com/file/d/1uEeEAv-a006nvBUwjyNkJG03kDlkwllD/view?usp=sharing',
    status: 'Verified',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="px-8 py-20 bg-[#f5f4f0]">
      <div className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
          <span className="w-6 h-0.5 bg-black"></span>
          Achievements
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black text-white z-30 shadow pointer-events-none">
                {c.date}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 pointer-events-none"></div>

              <div className="relative z-20 flex flex-col h-full justify-between">
                <div>
                  {/* Image Container */}
                  <div className="h-44 flex items-center justify-center overflow-hidden bg-gray-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 group-hover:text-gray-400 transition">
                      {c.issuer}
                    </span>

                    <h3 className="text-lg font-bold mb-2 transition group-hover:text-white">
                      {c.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed transition group-hover:text-gray-300">
                      {c.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 py-3 border-t border-gray-200 flex justify-between items-center text-sm font-medium transition group-hover:border-gray-700">
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black group-hover:text-white hover:underline transition z-30 font-semibold"
                    >
                      Show Credential ↗
                    </a>
                  ) : (
                    <span className="text-xs text-gray-400 group-hover:text-gray-500">
                      Certificate Issued
                    </span>
                  )}

                  <span className="text-xs text-green-600 font-semibold group-hover:text-green-400">
                    {c.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}