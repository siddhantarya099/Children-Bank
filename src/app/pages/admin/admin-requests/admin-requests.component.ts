import { Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteRequestComponent } from 'src/app/dialogs/delete-request/delete-request.component';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})

export class AdminRequestsComponent implements OnInit {
  unapprovedUsers: any;
  dataSource: any;
    
  @ViewChild(MatPaginator) paginator = MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  constructor(private userService: UserService, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((data: any) => {
      this.unapprovedUsers = data.filter((user : any) => !user.isApproved);
      this.dataSource = new MatTableDataSource(this.unapprovedUsers);
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  approveUser(id: string): void {
    this.userService.updateUserApprovalStatus(id, true).subscribe(() => {
      this.snackBar.open('User Request Approved', '', {
        duration: 2000,
      });
      this.unapprovedUsers = this.unapprovedUsers.filter((user : any) => user.id !== id);
      this.dataSource = new MatTableDataSource(this.unapprovedUsers);
    });
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteRequestComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.unapprovedUsers = this.unapprovedUsers.filter((user:any) => user.id !== id);
        this.dataSource = new MatTableDataSource(this.unapprovedUsers);
      }
    });
  }

  displayedColumns : string[]= ['name', 'relationshipName', 'relationshipNumber', 'relationship', 'aadhaar', 'dob','email', 'address','branchcode', 'approval'];
  
}
