import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const hashedPassword = await bcrypt.hash('komiguea2025', 10)
    
    await prisma.admin.deleteMany({})
    
    const admin = await prisma.admin.create({
      data: {
        username: 'admin',
        password: hashedPassword,
      }
    })
    
    return NextResponse.json({ 
      message: 'Admin créé avec succès',
      username: admin.username,
    })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur', error }, { status: 500 })
  }
}