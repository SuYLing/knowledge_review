import { headers } from 'next/headers'
import { auth } from './auth'
/**
 * 获取 服务端获取 session
 * */ 
export const getSession = async () => {
	return await auth.api.getSession({ headers: await headers() })
}

