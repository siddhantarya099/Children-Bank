import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepositService {
  userUrl = 'http://localhost:3000/account';
  userData:any;
  admin:any;
  constructor(private http: HttpClient) {}

  
  getBalance(accountNumber: any) {
    return this.http.get(this.userUrl,{params:{accountNumber:accountNumber}});
  }
  updateUserBalance(userData:any,balance:number,amount:number,transactionArray:any) {
    balance = Number(balance) + Number(amount);
    transactionArray.push({transactionType:"Deposit",amountUpdated:amount,timestamp:new Date()});
    return this.http.put(this.userUrl+"/"+userData[0].id,{id:userData[0].id,accountNumber:userData[0].accountNumber,balance:balance,transactions:transactionArray});
  }
  getAdminTransaction(accountNumber:number) {
    return this.http.get(this.userUrl,{params:{accountNumber:accountNumber}});
  }
  updateAdmin(adminData: any, amount: number, useraccountNumber: string | null | undefined) {
    adminData[0].transactions.push({senderAccount:useraccountNumber,receiverAccount:useraccountNumber,type:"Deposit",amountInvolved:amount});
    return this.http.put(this.userUrl+"/"+adminData[0].id,{id:adminData[0].id,accountNumber:adminData[0].accountNumber,balance:adminData[0].balance,transactions:adminData[0].transactions});
  }
  
  
} 
