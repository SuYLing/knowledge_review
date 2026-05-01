import { headers } from 'next/headers'
import { cache } from 'react'
import { auth } from './auth'
/**
 * 获取 服务端获取 session
 * */
export const getSession = cache(async () => {
	return await auth.api.getSession({ headers: await headers() })
})

