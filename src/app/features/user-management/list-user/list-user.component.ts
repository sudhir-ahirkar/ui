import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorage } from '../../../core/token.storage';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from '../../../shared/interfaces';
import { tap } from 'rxjs/operators';
type NewType = MatPaginator;

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, AfterViewInit {
  displayedColumns = ['username', 'salary', 'age', 'action'];
  dataSource = new MatTableDataSource<User>();
  sortColumn = 'age';
  sortDirection = 'desc';
  pageSize = 2;
  // filterBy = { keyword: 'user3' };
  filterBy = { keyword: null };


  @ViewChild(MatPaginator, { static: true }) paginator: NewType;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private authService: AuthService,
    private token: TokenStorage,
    public router: Router,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    // this.userService.getUsers(this.sortSearchPaginationObj.paginationObj).subscribe(
    //   data => {
    //     this.dataSource.data = data;
    //     this.userList=data;
    //   }
    // );
    // this.paginator.pageIndex = 0;

    this.resolveContents(this.filterBy);
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(data => {
      this.sortColumn = data.active;
      this.sortDirection = data.direction;
      this.paginator.pageIndex = 0;
      this.resolveContents(this.filterBy);
    });

    this.paginator.page
      .pipe(
        tap(() => {
          this.resolveContents(this.filterBy);
        }
        )
      )
      .subscribe();
  }

  resolveContents(filterBy) {
    this.userService
      // .getUsers(`${this.sortColumn},${this.sortDirection}`, this.pageSize, this.paginator.pageIndex, filterBy)
      .getUsers(`${this.sortColumn},${this.sortDirection}`, this.pageSize,  this.paginator.pageIndex, filterBy)
      .subscribe(data => {
        this.dataSource.data = data.content;
        this.paginator.length = data.totalElements;
      });
    // , error => this.snackBarService.error(error.error.errorMessage));


  }

  removeUser(id: number) {
    this.userService.remove(id).subscribe(
      response => {
        this.router.navigate(['/components/user-management/list-user']);
      }
    )
  }


  onFilter(filterValue: string) {
    this.filterBy.keyword = filterValue;
    this.paginator.pageIndex = 0;
    this.resolveContents(this.filterBy);
  }



}