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
	user: {
		additionalFields: {
			role: {
				type: 'string',
				input: false,
			},
		},
	},
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

export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user

