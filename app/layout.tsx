import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MBuisness — Tu tournes. On gère le reste.',
  description: 'Montage vidéo professionnel + couche opérationnelle complète + site internet. Un système clé en main pour créateurs et établissements francophones.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
