import { Router } from 'express'
import { envoyerMessage, getMessages } from '../controllers/contact.controller'
import { verifierToken } from '../middleware/auth.middleware'

const router = Router()

router.post('/', envoyerMessage)
router.get('/', verifierToken, getMessages)

export default router