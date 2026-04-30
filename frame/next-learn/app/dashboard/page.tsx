import { getSession } from '@/lib/get-session'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
	const session = await getSession()
	const user = session?.user
	if (!user) unauthorized()
	return (
		<div>
			<h1 className="font-bold">welcome! {user.name}</h1>
			<h1 className="font-bold">{user.email}</h1>
		</div>
	)
}

