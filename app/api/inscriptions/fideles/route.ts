import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const verifierToken = (request: NextRequest) => {
  const auth = request.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) return null
  try {
    return jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET || 'komiguea_secret_2025')
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  if (!verifierToken(request)) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }
  try {
    const fideles = await prisma.inscriptionFidele.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(fideles)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nom, prenom, fonction, age, cevb, mouvement } = await request.json()
    if (!nom || !prenom || !age) {
      return NextResponse.json({ message: 'Champs obligatoires manquants' }, { status: 400 })
    }
    const fidele = await prisma.inscriptionFidele.create({
      data: { nom, prenom, fonction, age: parseInt(age), cevb, mouvement }
    })
    return NextResponse.json({ message: 'Fidèle inscrit avec succès', data: fidele }, { status: 201 })
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
    await prisma.inscriptionFidele.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ message: 'Fidèle supprimé avec succès' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}