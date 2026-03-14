declare namespace NodeJS {
	interface ProcessEnv {
		MONGO_URL: string
		MONGO_PSW: string
		MONGO_USER: string
		PORT: number
		JWT_SECRET_KEY: string
	}
}

