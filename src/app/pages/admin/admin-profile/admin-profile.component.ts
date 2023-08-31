import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from 'src/app/services/account.service';
import { account } from 'src/app/interfaces/Account';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  output: any;
  users: any;
  data: account = new account(this.generateAccountNumber(), 0, [], sessionStorage.getItem("id") || "");
  accountDetails: any;

  userId = sessionStorage.getItem("id");
  constructor(private accountService : AccountService, private userService : UserService) {}

  ngOnInit() {
    let response = this.userService.getUserById(this.userId);
    response.subscribe((data) => {this.users = data});
  }

  generateAccountNumber() {
    let account_number = Math.floor((Math.random() * 100000000000)+ 1);
    return account_number;
  }

  createAccount() {
    let response = this.accountService.addAccount(this.data);
    response.subscribe((res: any) => this.output = res)
  }

}
