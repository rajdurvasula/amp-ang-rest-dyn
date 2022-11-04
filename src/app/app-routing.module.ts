import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogUserCreateComponent } from './blog-user-create/blog-user-create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'create', component: BlogUserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
