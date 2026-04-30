import Link from 'next/link'

export default function UnauthorizedPage() {
	return (
		<div>
			<h1>Unauthorized</h1>
			<Link href={'/'}>to home</Link>
		</div>
	)
}

