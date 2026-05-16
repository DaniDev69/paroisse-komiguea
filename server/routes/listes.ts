import { Router } from 'express'
import {
  getBaptemes,
  getCommunions,
  getConfirmations,
  getMariages,
} from '../controllers/listes.controller'

const router = Router()

router.get('/baptemes', getBaptemes)
router.get('/communions', getCommunions)
router.get('/confirmations', getConfirmations)
router.get('/mariages', getMariages)

export default router