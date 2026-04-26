import { prisma } from '@/lib/auth'

export default async function HomePage() {
	const user = await prisma.user.findMany({})
	console.log(user)
	return <div>1111</div>
}

