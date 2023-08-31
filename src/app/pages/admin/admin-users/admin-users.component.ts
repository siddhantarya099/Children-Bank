import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit{
    users: any;
    dataSource: any;
    
    @ViewChild(MatPaginator) paginator = MatPaginator;
    @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
      this.dataSource.paginator = paginator;
    }
    
    constructor(private userService: UserService) {}
  
    ngOnInit(): void {
      this.userService.getUserDetails().subscribe(
        (res: any)=>{
          this.users = res;
          this.dataSource = new MatTableDataSource(this.users);
        });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    displayedColumns : string[]= ['name', 'relationshipName', 'relationshipNumber','relationship','aadhaar','dob', 'email', 'address','branchcode'];
  
  }