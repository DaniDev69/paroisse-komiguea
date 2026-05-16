import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const annee = searchParams.get('annee')
    const categorie = searchParams.get('categorie')
    const where: any = {}
    if (annee) where.annee = parseInt(annee)
    if (categorie) where.categorie = categorie
    const data = await prisma.mariage.findMany({ where, orderBy: { nomEpoux: 'asc' } })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nomEpoux, prenomEpoux, nomEpouse, prenomEpouse, categorie, annee, pereCelebrant } = await request.json()
    if (!nomEpoux || !prenomEpoux || !categorie || !annee) {
      return NextResponse.json({ message: 'Champs manquants' }, { status: 400 })
    }
    const data = await prisma.mariage.create({
      data: { nomEpoux, prenomEpoux, nomEpouse, prenomEpouse, categorie, annee: parseInt(annee), pereCelebrant }
    })
    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}