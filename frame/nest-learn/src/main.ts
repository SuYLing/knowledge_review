import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import './configs'
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => {
    console.log(`server on http://127.0.0.1:${PORT}`)
  })
}
bootstrap()
