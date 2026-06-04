const services = [
  {
    icon: '📊',
    title: 'Stratégie & Conseil',
    description:
      'Nous analysons votre marché et définissons avec vous une stratégie de croissance adaptée à vos objectifs.',
  },
  {
    icon: '🚀',
    title: 'Développement commercial',
    description:
      'Acquisition de clients, partenariats stratégiques, structuration de votre force de vente — nous vous accompagnons.',
  },
  {
    icon: '💼',
    title: 'Gestion de projet',
    description:
      'Pilotage de vos projets de A à Z avec rigueur et transparence pour livrer dans les délais et le budget.',
  },
  {
    icon: '📱',
    title: 'Présence digitale',
    description:
      'Site web, réseaux sociaux, SEO — nous renforçons votre visibilité en ligne pour attirer plus de clients.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Des solutions concrètes pour chaque étape de votre développement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
