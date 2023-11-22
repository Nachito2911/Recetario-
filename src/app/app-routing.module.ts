import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'recetas-clasicas',
    loadChildren: () => import('./pages/recetas-clasicas/recetas-clasicas.module').then(m => m.RecetasClasicasPageModule)
  },
  {
    path: 'recetas-veganas',
    loadChildren: () => import('./pages/recetas-veganas/recetas-veganas.module').then(m => m.RecetasVeganasPageModule)
  },
  {
    path: 'recetas-postres',
    loadChildren: () => import('./pages/recetas-postres/recetas-postres.module').then(m => m.RecetasPostresPageModule)
  },
  {
    path: 'crear-receta',
    loadChildren: () => import('./pages/crear-receta/crear-receta.module').then( m => m.CrearRecetaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
