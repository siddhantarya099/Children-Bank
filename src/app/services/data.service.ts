import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl: string = 'http://localhost:3000';
  ACCOUNT_URL = "http://localhost:3000/accounts/"

  constructor(private http: HttpClient) {}

  deposit(accountNumber: string, userId: string, amount: number): Observable<any> {
    const depositData = {
      accountNumber: accountNumber,
      userId: userId,
      amount: amount,
      timestamp: new Date().toISOString()
    };
    return this.http.post(`${this.baseUrl}/depositTransactions`, depositData);
  }

  withdraw(accountNumber: string, userId: string, amount: number): Observable<any> {
    const withdrawData = {
      accountNumber: accountNumber,
      userId: userId,
      amount: amount,
      timestamp: new Date().toISOString()
    };

    return this.http.post(`${this.baseUrl}/withdrawTransactions`, withdrawData);
  }

  getAllTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/manageTransactions`);
  }

}
 