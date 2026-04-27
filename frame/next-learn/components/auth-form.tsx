'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input } from './ui/input'
interface Inputs {
	email: string
	password: string
}
export const AuthForm = () => {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
	const [mode, setMode] = useState<'login' | 'register'>('login')
	return (
		<div>
			<Tabs
				defaultValue={mode}
				onValueChange={(v) => setMode(v as 'login' | 'register')}
				className="w-100"
			>
				<TabsList>
					<TabsTrigger value="login">登陆</TabsTrigger>
					<TabsTrigger value="register">注册</TabsTrigger>
				</TabsList>
			</Tabs>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" {...register('email')} />
				<Input type="text" {...register('password')} />
				{mode === 'register' && (
					<>
						<Input type="text" {...register('password')} />
					</>
				)}
			</form>
		</div>
	)
}

