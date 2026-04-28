import type { Metadata } from 'next'
import { SignInForm } from './sign-in-form'

export const metadata: Metadata = {
	title: '登陆',
}
export default async function SignInPage() {
	return (
		<main className="w-full max-w-md mx-auto">
			<SignInForm />
		</main>
	)
}

