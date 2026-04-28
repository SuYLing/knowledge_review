'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
interface SignInInputs {
	name: string
	password: string
}
export const SignInForm = () => {
	const form = useForm<SignInInputs>()
	return (
		<Card>
			<CardHeader>
				登陆
				<CardDescription>输入用户信息以登陆系统</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<FieldGroup>
						<Controller
							control={form.control}
							name="name"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="name">用户名</FieldLabel>
									<Input {...field} id="name" />
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="password"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="password">用户密码</FieldLabel>
									<Input {...field} type="password" id="password" />
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
				<CardAction className="w-full">
					<Button className="w-full">登陆</Button>
				</CardAction>
			</CardContent>
		</Card>
	)
}

