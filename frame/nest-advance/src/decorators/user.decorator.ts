import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import type { UserRole } from 'src/modules/auth/entities/user.entity'
export type UserType = {
  sub: number
  email: string
  role: UserRole
}
// 创建一个参数装饰器
export const User = createParamDecorator(
  (
    data: keyof UserType /* 传入的参数： 例如【@User("email")】 */,
    ctx: ExecutionContext /* 执行上下文 */,
  ) => {
    const request: Request & { user?: UserType } = ctx
      .switchToHttp()
      .getRequest()
    const user = request.user

    return data ? user?.[data] : user
  },
)
