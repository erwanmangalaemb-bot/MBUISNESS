import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MBusiness — Votre partenaire business',
  description: 'MBusiness — Votre partenaire de confiance pour accompagner la croissance de votre entreprise.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">{children}</body>
    </html>
  )
}
