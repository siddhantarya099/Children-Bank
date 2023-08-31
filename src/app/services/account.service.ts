import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  ACCOUNT_URL = "http://localhost:3000/accounts/"

  public getAccountById(id: any) {
    return this.http.get(this.ACCOUNT_URL + id);
  }

  public addAccount(data: any) {
    return this.http.post(this.ACCOUNT_URL, data);
  }
}
  