import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminRequestsComponent } from './pages/admin/admin-requests/admin-requests.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminDepositComponent } from './pages/admin/admin-deposit/admin-deposit.component';
import { AdminWithdrawComponent } from './pages/admin/admin-withdraw/admin-withdraw.component';
import { AdminTransactionsComponent } from './pages/admin/admin-transactions/admin-transactions.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteRequestComponent } from './dialogs/delete-request/delete-request.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminPageComponent,
    AdminProfileComponent,
    AdminRequestsComponent,
    AdminUsersComponent,
    AdminDepositComponent,
    AdminWithdrawComponent,
    AdminTransactionsComponent,
    DeleteRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
