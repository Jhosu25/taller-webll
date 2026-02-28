import { HttpInterceptorFn } from '@angular/common/http';

// Este interceptor agrega automáticamente el JWT en el header Authorization
// a TODAS las peticiones HTTP que haga la app
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Si existe un token, clonamos la petición y agregamos el header
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  // Si no hay token (ej. en /login), la petición pasa sin modificar
  return next(req);
};
