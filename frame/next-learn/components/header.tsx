import type { User } from '@/lib/auth'
import { getSession } from '@/lib/get-session'
import { unauthorized } from 'next/navigation'

export const Header = async () => {
	const session = await getSession()
	const user = session?.user
	if (!user) unauthorized()
	return (
		<header className="drop-shadow-2xl border-b flex h-12 items-center justify-between">
			<div className="flex justify-between w-full max-w-2xl mx-auto">
				<h1 className="font-black">Better-Auth Learn</h1>
				<UserDropdown user={user} />
			</div>
		</header>
	)
}

interface UserDropdownProps {
	user: User
}
const UserDropdown = async ({ user }: UserDropdownProps) => {
	return <div>{user.email}</div>
}

