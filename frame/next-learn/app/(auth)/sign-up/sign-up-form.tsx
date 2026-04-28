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
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
interface SignInInputs {
	name: string
	email: string
	password: string
	confirmPasswprd: string
}
export const SignUpForm = () => {
	const form = useForm<SignInInputs>({
		defaultValues: {
			name: '',
			password: '',
		},
	})
	const sumbit: SubmitHandler<SignInInputs> = (data) => {
		console.log(data)
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
							name="name"
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
							name="confirmPasswprd"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="confirmPasswprd">确认密码</FieldLabel>
									<Input
										{...field}
										type="password"
										id="confirmPasswprd"
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

