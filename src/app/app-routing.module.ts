import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminRequestsComponent } from './pages/admin/admin-requests/admin-requests.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminTransactionsComponent } from './pages/admin/admin-transactions/admin-transactions.component';
import { AdminDepositComponent } from './pages/admin/admin-deposit/admin-deposit.component';
import { AdminWithdrawComponent } from './pages/admin/admin-withdraw/admin-withdraw.component';


const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: AdminProfileComponent},
  {path: 'requests', component: AdminRequestsComponent},
  {path: 'users', component: AdminUsersComponent},
  {path: 'deposit', component: AdminDepositComponent},
  {path: 'withdraw', component: AdminWithdrawComponent},
  {path: 'transactions', component: AdminTransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
