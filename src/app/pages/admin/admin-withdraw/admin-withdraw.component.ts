import { Component } from '@angular/core';
import { WithdrawService } from '../../../services/withdraw.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withdraw',
  templateUrl: './admin-withdraw.component.html',
  styleUrls: ['./admin-withdraw.component.css']
})
export class AdminWithdrawComponent {
  balance!: number;
  userData: any;
  adminData:any;
  amountToBeWithdrawn:any;
  id: any;
  transactionArray: any[] | undefined;
  userAccountNumber: any;
  constructor(private builder: FormBuilder,private withdrawService: WithdrawService,private toastr: ToastrService) {}
  withdrawForm = this.builder.group({accountNumber: this.builder.control( '',Validators.compose([Validators.required])),
  withdrawAmount: this.builder.control('',Validators.compose([Validators.required])),
  userid: this.builder.control('',Validators.compose([Validators.required])),
  });

  withdrawMoney() {
    if (this.withdrawForm.valid) {
      this.amountToBeWithdrawn = this.withdrawForm.value.withdrawAmount;
      this.userAccountNumber=this.withdrawForm.value.accountNumber;
      this.withdrawService.getBalance(this.userAccountNumber).subscribe((data:any) => {
          if(data.length){
          this.userData = data;
          this.balance = this.userData[0].balance.valueOf();
          this.id = this.userData[0].id;
          this.transactionArray = this.userData[0].transactions;
          if (this.amountToBeWithdrawn <= 0) {
            this.toastr.error('Amount should be greater than 0');
          } else if (this.amountToBeWithdrawn > this.balance) {
            this.toastr.error('Insufficient Balance');
          } else {
            this.withdrawService.updateUserBalance(this.userData,this.balance,this.amountToBeWithdrawn,this.transactionArray).subscribe((data) => {
              this.withdrawService.getAdminTransaction(10001).subscribe((data) => {
                this.adminData = data;
                this.withdrawService.updateAdmin(this.adminData,this.amountToBeWithdrawn,this.userAccountNumber).subscribe((data)=>{
                  this.toastr.success('Money Withdrawn Successfully');
                })
              })
              });
            }
          }
          else{
            this.toastr.error('Account Number not found!!');
          }
      
        });
    }
      else{
        this.toastr.error('Invalid Input');
      }
      this.withdrawForm.reset();
      }
}