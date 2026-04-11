import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { Roles } from 'src/decorators/role.decorator'
import type { UserType } from 'src/decorators/user.decorator'
import { UserRole } from 'src/modules/auth/entities/user.entity'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler())
    const req = context.switchToHttp().getRequest() satisfies Request & {
      user: UserType
    }
    // 都能访问的直接放行
    if (!roles || req.user.role === UserRole.ADMIN) return true

    if (!req.user || !roles.includes(req.user.role))
      throw new UnauthorizedException('无权访问')

    return true
  }
}
