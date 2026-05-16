import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, sujet, message } = await request.json()
    if (!nom || !message) {
      return NextResponse.json({ message: 'Champs obligatoires manquants' }, { status: 400 })
    }
    const msg = await prisma.messageContact.create({
      data: { nom, email, telephone, sujet, message }
    })
    return NextResponse.json({ message: 'Message envoyé avec succès', data: msg }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur', error }, { status: 500 })
  }
}