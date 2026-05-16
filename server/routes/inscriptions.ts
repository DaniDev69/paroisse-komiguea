import { Router } from 'express'
import {
  creerFidele,
  creerCatechumene,
  creerCatechiste,
  getFideles,
  getCatechumenes,
  getCatechistes,
  supprimerFidele,
  supprimerCatechumene,
  supprimerCatechiste,
} from '../controllers/inscriptions.controller'
import { verifierToken } from '../middleware/auth.middleware'

const router = Router()

router.post('/fideles', creerFidele)
router.post('/catechumenes', creerCatechumene)
router.post('/catechistes', creerCatechiste)
router.get('/fideles', verifierToken, getFideles)
router.get('/catechumenes', verifierToken, getCatechumenes)
router.get('/catechistes', verifierToken, getCatechistes)
router.delete('/fideles/:id', verifierToken, supprimerFidele)
router.delete('/catechumenes/:id', verifierToken, supprimerCatechumene)
router.delete('/catechistes/:id', verifierToken, supprimerCatechiste)

export default router