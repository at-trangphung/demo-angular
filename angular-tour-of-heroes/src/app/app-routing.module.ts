import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatusComponent } from './catus/catus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatusDetailComponent } from './catus-detail/catus-detail.component';

const routes: Routes = [
  { path: 'catus', component: CatusComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CatusDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
