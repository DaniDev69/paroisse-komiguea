import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

app.use(express.json())

// Import routes
import('./routes/inscriptions').then(m => app.use('/api/inscriptions', m.default))
import('./routes/listes').then(m => app.use('/api/listes', m.default))
import('./routes/contact').then(m => app.use('/api/contact', m.default))
import('./routes/auth').then(m => app.use('/api/auth', m.default))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Serveur paroisse en ligne' })
})

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`)
})

export default app