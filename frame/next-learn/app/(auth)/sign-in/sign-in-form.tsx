'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
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
import { z } from 'zod'

const signInInputsSchema = z.object({
	email: z.email(),
	password: z.string().min(6, { error: '密码必须大于6位' }),
	remenberMe: z.boolean().optional(),
})
type SignInInputs = z.infer<typeof signInInputsSchema>
export const SignInForm = () => {
	const router = useRouter()

	const form = useForm({
		resolver: zodResolver(signInInputsSchema),
		defaultValues: {
			email: '',
			password: '',
			remenberMe: false,
		},
	})
	const sumbit: SubmitHandler<SignInInputs> = async (data) => {
		const { email, password } = data
		const { error } = await authClient.signIn.email({
			email,
			password,
		})
		if (error) {
			console.log(error)
			toast.error(error.message || 'something get error')
		} else {
			toast.success('登陆成功')
			router.replace('/')
		}
	}
	return (
		<Card>
			<CardHeader>
				登陆
				<CardDescription>输入用户信息以登陆系统</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">
				<form onSubmit={form.handleSubmit(sumbit)} id="sign-in">
					<FieldGroup>
						<Controller
							control={form.control}
							name="email"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="email">邮箱</FieldLabel>
									<Input
										{...field}
										id="email"
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
							name="remenberMe"
							render={({ field, fieldState }) => (
								<Field
									data-invalid={fieldState.invalid}
									orientation={'horizontal'}
								>
									<Checkbox
										name={field.name}
										checked={field.value}
										onCheckedChange={field.onChange}
										id="remenberMe"
									/>
									<FieldLabel htmlFor="remenberMe">记住我</FieldLabel>
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
				<CardAction className="w-full">
					<Button type="submit" form="sign-in" className="w-full">
						登陆
					</Button>
				</CardAction>
			</CardContent>
		</Card>
	)
}

