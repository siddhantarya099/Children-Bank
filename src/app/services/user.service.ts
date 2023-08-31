import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  USER_URL = "http://localhost:3500/users/";

  public getUserById(id: any) {
    return this.http.get(this.USER_URL + id);
  }

  public getUserDetails() {
    return this.http.get(this.USER_URL);
  }

  public updateUserApprovalStatus(id: string, isApproved: boolean) {
    const url = `${this.USER_URL}${id}`;
    return this.http.patch(url, { isApproved });
  }
}
