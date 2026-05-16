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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const annee = searchParams.get('annee')
    const categorie = searchParams.get('categorie')
    const where: any = {}
    if (annee) where.annee = parseInt(annee)
    if (categorie) where.categorie = categorie
    const data = await prisma.bapteme.findMany({
      where,
      include: { photos: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, prenom, categorie, annee, pereCelebrant, photo } = body
    if (!nom || !prenom || !categorie || !annee) {
      return NextResponse.json({ message: 'Champs manquants' }, { status: 400 })
    }
    const data = await prisma.bapteme.create({
      data: {
        nom, prenom, categorie,
        annee: parseInt(annee),
        pereCelebrant,
        photo,
        photos: photo ? { create: [{ url: photo }] } : undefined
      },
      include: { photos: true }
    })
    return NextResponse.json(data, { status: 201 })
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
    await prisma.bapteme.delete({ where: { id: parseInt(id) } })
    return NextResponse.json({ message: 'Supprimé avec succès' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}