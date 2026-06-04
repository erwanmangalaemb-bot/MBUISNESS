const stats = [
  { value: '150+', label: 'Clients accompagnés' },
  { value: '8 ans', label: "D'expérience" },
  { value: '98%', label: 'Satisfaction client' },
  { value: '40+', label: 'Secteurs couverts' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="section-title text-left">Qui sommes-nous ?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fondée avec une vision claire — rendre accessible l&apos;expertise business aux
              entrepreneurs ambitieux — MBusiness est bien plus qu&apos;un cabinet de conseil.
              Nous sommes votre partenaire de terrain, engagé dans vos succès.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Notre équipe pluridisciplinaire combine expertise stratégique, sens commercial
              et maîtrise des outils digitaux pour vous offrir un accompagnement à 360°,
              adapté à la réalité de votre marché.
            </p>
            <a href="#contact" className="btn-primary">
              En savoir plus
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] rounded-2xl p-6 text-white text-center"
              >
                <div className="text-3xl font-extrabold mb-1">{s.value}</div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
