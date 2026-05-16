import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // DEBUG - on affiche ce qu'on reçoit
    console.log('Username reçu:', username)
    console.log('Password reçu:', password)

    const admin = await prisma.admin.findUnique({ where: { username } })
    
    // DEBUG - on affiche ce qu'on trouve dans la base
    console.log('Admin trouvé:', admin)

    if (!admin) {
      return NextResponse.json({ message: 'Admin non trouvé' }, { status: 401 })
    }

    const valide = await bcrypt.compare(password, admin.password)
    
    // DEBUG
    console.log('Mot de passe valide:', valide)

    if (!valide) {
      return NextResponse.json({ message: 'Mot de passe incorrect' }, { status: 401 })
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET || 'komiguea_secret_2025',
      { expiresIn: '8h' }
    )

    return NextResponse.json({ message: 'Connexion réussie', token })
  } catch (error) {
    console.log('Erreur:', error)
    return NextResponse.json({ message: 'Erreur serveur', error: String(error) }, { status: 500 })
  }
}