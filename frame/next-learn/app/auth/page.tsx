import { AuthForm } from '@/components/auth-form'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default async function AuthPage() {
	return (
		<Card className="w-full max-w-md mx-auto">
			<CardHeader className='text-center text-xl font-black'>用户登入</CardHeader>
			<CardContent>
				<AuthForm />
			</CardContent>
		</Card>
	)
}

