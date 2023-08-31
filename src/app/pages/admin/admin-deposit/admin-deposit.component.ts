import { Component } from '@angular/core';
import { DepositService } from '../../../services/deposit.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-deposit',
  templateUrl: './admin-deposit.component.html',
  styleUrls: ['./admin-deposit.component.css']
})

export class AdminDepositComponent {
  balance!: number;
  userData: any;
  adminData:any;
  amountToBeDeposit:any;
  id: any;
  transactionArray: any[] | undefined;
  userAccountNumber: any;
  constructor(private builder: FormBuilder,private depositService: DepositService,private toastr: ToastrService) {}
  depositForm = this.builder.group({accountNumber: this.builder.control( '',Validators.compose([Validators.required])),
  depositAmount: this.builder.control('',Validators.compose([Validators.required])),
  userid: this.builder.control('',Validators.compose([Validators.required])),
  });
 
  depositMoney() {
    if (this.depositForm.valid) {
      this.amountToBeDeposit = this.depositForm.value.depositAmount;
      this.userAccountNumber=this.depositForm.value.accountNumber;
      this.depositService.getBalance(this.userAccountNumber).subscribe((data:any) => {
          if(data.length){
          this.userData = data;
          this.balance = this.userData[0].balance.valueOf();
          this.id = this.userData[0].id;
          this.transactionArray = this.userData[0].transactions;
          if (this.amountToBeDeposit <= 0) {
            this.toastr.error('Amount should be greater than 0');
          } else {
            this.depositService.updateUserBalance(this.userData,this.balance,this.amountToBeDeposit,this.transactionArray).subscribe((data) => {
              this.depositService.getAdminTransaction(10001).subscribe((data) => {
                this.adminData = data;
                this.depositService.updateAdmin(this.adminData,this.amountToBeDeposit,this.userAccountNumber).subscribe((data)=>{
                  this.toastr.success('Money Deposit Successfully');
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
      this.depositForm.reset();
      }
}