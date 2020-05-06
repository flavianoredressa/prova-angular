import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { LayoutComponent } from './layouts/layout.component';
// import { AuthGuard } from './core/guards/auth.guard';
// import { NotAuthGuard } from './core/guards/not-auth.guard';
// import { Error404Component } from './pages/erros-http/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/person/person.module').then(m => m.PersonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
