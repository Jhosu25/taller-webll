import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductCard } from './shared/product-card/product-card';
import { Pag404 } from './shared/pag404/pag404';
import { Consultas } from './shared/consultas/consultas';
import { Acerca } from './features/acerca/acerca';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { Formulario } from './shared/formulario-usuario/formulario-usuario';

export const routes: Routes = [

    //Ruta Inicial
    {path:'home', component:Home},

    //Rutas de navegacion
    {path:'acerca', component:Acerca},
    {path:'catalogo', component:ProductCard},
    {path:'consultas', component:Consultas},
    {path:'usuarios', component:Usuarios, canActivate:[authGuard]},
    {path:'registro', component:Formulario},
    {path:'login', component:Login},

    //Redireccionamiento (pag-404) o ruta que no exite dentro del enrutamineto
    {path:'**', component:Pag404}
];
