export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f1f35] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold text-blue-300">
          M<span className="text-white">Business</span>
        </span>
        <p className="text-sm text-gray-400">
          © {year} MBusiness. Tous droits réservés.
        </p>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">À propos</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
