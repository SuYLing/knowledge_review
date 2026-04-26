import { PrismaPg } from '@prisma/adapter-pg'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from './generated/prisma/client'
const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
export const prisma = new PrismaClient({ adapter })

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql', // or "mysql", "postgresql", ...etc
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		github: {
			clientId: '',
			clientSecret: '',
		},
	},
})

