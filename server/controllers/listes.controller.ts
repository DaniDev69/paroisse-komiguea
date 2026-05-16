import { Request, Response } from 'express'
import prisma from '../../lib/prisma'

export const getBaptemes = async (req: Request, res: Response) => {
  try {
    const { annee, categorie } = req.query
    const where: any = {}
    if (annee) where.annee = parseInt(annee as string)
    if (categorie) where.categorie = categorie as string
    const baptemes = await prisma.bapteme.findMany({ where, orderBy: { nom: 'asc' } })
    res.json(baptemes)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getCommunions = async (req: Request, res: Response) => {
  try {
    const { annee, categorie } = req.query
    const where: any = {}
    if (annee) where.annee = parseInt(annee as string)
    if (categorie) where.categorie = categorie as string
    const communions = await prisma.communion.findMany({ where, orderBy: { nom: 'asc' } })
    res.json(communions)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getConfirmations = async (req: Request, res: Response) => {
  try {
    const { annee, categorie } = req.query
    const where: any = {}
    if (annee) where.annee = parseInt(annee as string)
    if (categorie) where.categorie = categorie as string
    const confirmations = await prisma.confirmation.findMany({ where, orderBy: { nom: 'asc' } })
    res.json(confirmations)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getMariages = async (req: Request, res: Response) => {
  try {
    const { annee, categorie } = req.query
    const where: any = {}
    if (annee) where.annee = parseInt(annee as string)
    if (categorie) where.categorie = categorie as string
    const mariages = await prisma.mariage.findMany({ where, orderBy: { nomEpoux: 'asc' } })
    res.json(mariages)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}