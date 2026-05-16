import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const verifierToken = (request: NextRequest) => {
  const auth = request.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) return null
  try {
    return jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET || 'komiguea_secret_2025')
  } catch { return null }
}

export async function POST(request: NextRequest) {
  if (!verifierToken(request)) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }
  try {
    const { baptemeId, url } = await request.json()
    const photo = await prisma.baptemePhoto.create({
      data: { baptemeId: parseInt(baptemeId), url }
    })
    return NextResponse.json(photo, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!verifierToken(request)) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }
  try {
    const { id } = await request.json()
    await prisma.baptemePhoto.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ message: 'Photo supprimée' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}