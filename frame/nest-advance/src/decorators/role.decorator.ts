// 控制路由可以被那些角色进行访问

import { Reflector } from '@nestjs/core'
import type { UserRole } from 'src/modules/auth/entities/user.entity'

export const Roles = Reflector.createDecorator<UserRole[]>()
