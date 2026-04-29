'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const signUpInputsSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string().min(6, '密码需要大于六位'),
	confirmPassword: z.string().min(6, '密码需要大于六位'),
})
type SignUpInputs = z.infer<typeof signUpInputsSchema>
export const SignUpForm = () => {
	const router = useRouter()
	const form = useForm({
		resolver: zodResolver(signUpInputsSchema),
		defaultValues: {
			name: '',
			password: '',
			email: '',
			confirmPassword: '',
		},
	})
	const sumbit: SubmitHandler<SignUpInputs> = async (data) => {
		const { email, password, name } = data
		console.log(data)
		const { error } = await authClient.signUp.email({
			email,
			password,
			name,
			callbackURL: '/',
		})
		if (error) {
			toast.error(error.message && 'something get error')
		} else {
			toast.success('注册成功')
			router.replace('/sign-in')
		}
	}
	return (
		<Card>
			<CardHeader>
				注册
				<CardDescription>创建用户信息以登陆系统</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">
				<form onSubmit={form.handleSubmit(sumbit)} id="sign-up">
					<FieldGroup>
						<Controller
							control={form.control}
							name="name"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="name">用户名</FieldLabel>
									<Input
										{...field}
										id="name"
										aria-invalid={fieldState.invalid}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="email"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="email">邮箱</FieldLabel>
									<Input
										{...field}
										id="email"
										type="email"
										placeholder="user@example.com"
										aria-invalid={fieldState.invalid}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="password"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="password">用户密码</FieldLabel>
									<Input
										{...field}
										type="password"
										id="password"
										aria-invalid={fieldState.invalid}
									/>
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="confirmPassword"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="confirmPassword">确认密码</FieldLabel>
									<Input
										{...field}
										type="password"
										id="confirmPassword"
										aria-invalid={fieldState.invalid}
									/>
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
				<CardAction className="w-full">
					<Button type="submit" form="sign-up" className="w-full">
						创建账户
					</Button>
				</CardAction>
			</CardContent>
		</Card>
	)
}

