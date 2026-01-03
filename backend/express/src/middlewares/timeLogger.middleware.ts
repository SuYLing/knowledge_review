import { format } from 'date-fns'
import type { RequestHandler } from 'express'
export const TimeLoggerMiddleware: RequestHandler = (req, res, next) => {
	console.log(req.method)
	console.log(
		`${format(new Date(), 'yyyy-MM-dd hh/mm/ss')} - ${req.method} from ${
			req.url
		}`
	)
	next()
}

