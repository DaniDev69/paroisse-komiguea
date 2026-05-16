import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: "Paroisse Notre-Dame d'Assomption de Komiguéa",
  description: "Site officiel de la Paroisse Notre-Dame d'Assomption de Komiguéa - Parakou, Bénin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
       
          <TopBar />
          <Header />
          {children}
       
      </body>
    </html>
  )
}