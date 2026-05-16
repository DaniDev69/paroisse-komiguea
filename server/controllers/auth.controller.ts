import { Request, Response } from 'express'
import prisma from '../../lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: 'Identifiants manquants' })

    const admin = await prisma.admin.findUnique({ where: { username } })
    if (!admin) return res.status(401).json({ message: 'Identifiants incorrects' })

    const valide = await bcrypt.compare(password, admin.password)
    if (!valide) return res.status(401).json({ message: 'Identifiants incorrects' })

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '8h' }
    )

    res.json({ message: 'Connexion réussie', token })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}