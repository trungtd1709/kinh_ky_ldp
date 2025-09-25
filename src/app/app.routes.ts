import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to dashboard or landing page
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {
    path: 'home',
    loadComponent: () => import('./modules/home/pages/home/home.component').then(c => c.HomeComponent)
  },
  // Auth module routes (lazy loaded)
//   {
//     path: 'auth',
//     loadChildren: () => import('./modules/auth/auth.routes').then(r => r.AUTH_ROUTES)
//   },
  
//   // Dashboard module routes (lazy loaded)
//   {
//     path: 'dashboard',
//     loadChildren: () => import('./modules/dashboard/dashboard.routes').then(r => r.DASHBOARD_ROUTES),
//     canActivate: [AuthGuard]
//   },
  
//   // User management module routes (lazy loaded)
//   {
//     path: 'users',
//     loadChildren: () => import('./modules/user-management/user-management.routes').then(r => r.USER_MANAGEMENT_ROUTES),
//     canActivate: [AuthGuard]
//   },
  
  // Wildcard route - must be last
  // { path: '**', redirectTo: '/home' }
];