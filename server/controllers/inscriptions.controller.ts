import { Request, Response } from 'express'
import prisma from '../../lib/prisma'

export const creerFidele = async (req: Request, res: Response) => {
  try {
    const { nom, prenom, fonction, age, cevb, mouvement } = req.body
    if (!nom || !prenom || !age) return res.status(400).json({ message: 'Champs obligatoires manquants' })
    const fidele = await prisma.inscriptionFidele.create({
      data: { nom, prenom, fonction, age: parseInt(age), cevb, mouvement }
    })
    res.status(201).json({ message: 'Fidèle inscrit avec succès', data: fidele })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const creerCatechumene = async (req: Request, res: Response) => {
  try {
    const { nom, prenom, classe, langue, annee, telephone } = req.body
    if (!nom || !prenom || !classe) return res.status(400).json({ message: 'Champs obligatoires manquants' })
    const catechumene = await prisma.inscriptionCatechumene.create({
      data: { nom, prenom, classe, langue, annee, telephone }
    })
    res.status(201).json({ message: 'Catéchumène inscrit avec succès', data: catechumene })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const creerCatechiste = async (req: Request, res: Response) => {
  try {
    const { nom, prenom, fonction, telephone, annee } = req.body
    if (!nom || !prenom || !telephone) return res.status(400).json({ message: 'Champs obligatoires manquants' })
    const catechiste = await prisma.inscriptionCatechiste.create({
      data: { nom, prenom, fonction, telephone, annee }
    })
    res.status(201).json({ message: 'Catéchiste inscrit avec succès', data: catechiste })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getFideles = async (req: Request, res: Response) => {
  try {
    const fideles = await prisma.inscriptionFidele.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(fideles)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getCatechumenes = async (req: Request, res: Response) => {
  try {
    const catechumenes = await prisma.inscriptionCatechumene.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(catechumenes)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const getCatechistes = async (req: Request, res: Response) => {
  try {
    const catechistes = await prisma.inscriptionCatechiste.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(catechistes)
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const supprimerFidele = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string)
    await prisma.inscriptionFidele.delete({ where: { id } })
    res.json({ message: 'Fidèle supprimé avec succès' })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const supprimerCatechumene = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string)
    await prisma.inscriptionCatechumene.delete({ where: { id } })
    res.json({ message: 'Catéchumène supprimé avec succès' })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

export const supprimerCatechiste = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string)
    await prisma.inscriptionCatechiste.delete({ where: { id } })
    res.json({ message: 'Catéchiste supprimé avec succès' })
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error })
  }
}

