
export interface Usuario {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    phone?: string;
    rol: 'ROLE_ADMIN' | 'ROLE_EMPLEADO';
}

// Lo que devuelve el endpoint POST /login
export interface LoginResponse {
    token: string;
    email: string;
    rol: string;
}