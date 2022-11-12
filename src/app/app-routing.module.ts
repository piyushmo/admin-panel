import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { RightsGuard } from './service/rights.guard';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[RightsGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[RightsGuard]},
  { path: 'verify', component: VerificationComponent, canActivate:[RightsGuard]},
  {path: 'doc', component: DocumentComponent, canActivate:[RightsGuard]},
  {path: 'cust-info', component: CustomerInfoComponent, canActivate:[RightsGuard]},
  { path: 'accessdenied', component: UnauthorisedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
