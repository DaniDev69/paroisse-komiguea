import { Request, Response } from 'express'
import prisma from '../../lib/prisma'

export const envoyerMessage = async (req: Request, res: Response) => {
  try {
    const { nom, email, telephone, sujet, message } = req.body
    if (!nom || !message) return res.status(400).json({ message: 'Champs obligatoires manquants' })
    const msg = await prisma.messageContact.create({
      data: { nom, email, telephone, sujet, message }
    })
    res.status(201).json({ message: 'Message envoyé avec succès', data: msg })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.messageContact.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}