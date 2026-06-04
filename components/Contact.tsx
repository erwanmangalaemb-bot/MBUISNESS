'use client'

const infos = [
  { icon: '📧', label: 'Email', value: 'contact@mbusiness.fr' },
  { icon: '📞', label: 'Téléphone', value: '+33 1 00 00 00 00' },
  { icon: '📍', label: 'Adresse', value: 'Paris, France' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Un projet ? Une question ? Nous sommes disponibles pour vous répondre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Envoyez-nous un message</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dupont"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet ou votre question..."
                />
              </div>
              <button type="submit" className="btn-primary text-sm w-full text-center">
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-6">
            {infos.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{info.label}</div>
                  <div className="text-gray-600">{info.value}</div>
                </div>
              </div>
            ))}

            <div className="mt-4 p-4 bg-blue-50 rounded-xl text-sm text-blue-700">
              <strong>Note :</strong> Pour activer l&apos;envoi du formulaire, connectez-le à un
              service comme{' '}
              <a
                href="https://formspree.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Formspree
              </a>{' '}
              ou configurez une API route.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
