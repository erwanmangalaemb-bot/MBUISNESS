export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#2563eb]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center text-white">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-500/30 border border-blue-400/40 rounded-full text-blue-200">
          Votre partenaire de croissance
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Propulsez votre<br />
          <span className="text-blue-300">entreprise</span> vers le succès
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          MBusiness accompagne les entrepreneurs et les PME dans leur développement
          avec des solutions sur mesure, concrètes et efficaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="btn-primary text-base">
            Découvrir nos services
          </a>
          <a href="#contact" className="btn-outline text-base">
            Prendre rendez-vous
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
