import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const getPermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    const userPermissions = context.getArgs()[0].user?.permissions ?? [];

    if (!getPermissions) {
      return true;
    }

    const hasPermissions = () => {
      return getPermissions.every((permission) =>
        userPermissions.includes(permission),
      );
    };

    return hasPermissions();
  }
}
