import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-transactions',
  templateUrl: './admin-transactions.component.html',
  styleUrls: ['./admin-transactions.component.css']
})
export class AdminTransactionsComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['accountNumber', 'userID', 'transactionType', 'amountUpdated', 'timestamp'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    this.http.get('../../../account.json').subscribe((data: any) => {
      this.dataSource.data = data.account;
      this.dataSource.paginator = this.paginator;
    });
  }
}
