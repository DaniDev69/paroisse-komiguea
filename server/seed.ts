import * as dotenv from 'dotenv'
dotenv.config()

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('komiguea2025', 10)
  
  await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
    },
  })
  
  console.log('✅ Admin créé avec succès !')
  console.log('Username: admin')
  console.log('Password: komiguea2025')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())