import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth-service';


export const adminMatchGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  return auth.rolActual() === 'ADMIN';
};