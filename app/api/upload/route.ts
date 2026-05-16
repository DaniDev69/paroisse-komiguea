import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import jwt from 'jsonwebtoken'

const verifierToken = (request: NextRequest) => {
  const auth = request.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) return null
  try {
    return jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET || 'komiguea_secret_2025')
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  if (!verifierToken(request)) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const dossier = formData.get('dossier') as string || 'sacrements'

    if (!file) {
      return NextResponse.json({ message: 'Aucun fichier reçu' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const nomFichier = `${Date.now()}_${file.name.replace(/\s/g, '_')}`
    const dossierPath = path.join(process.cwd(), 'public', dossier)

    await mkdir(dossierPath, { recursive: true })
    await writeFile(path.join(dossierPath, nomFichier), buffer)

    return NextResponse.json({ url: `/${dossier}/${nomFichier}` })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur upload', error }, { status: 500 })
  }
}