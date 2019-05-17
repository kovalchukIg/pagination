import {Component, OnInit, ViewChild} from '@angular/core';
import { UsersService} from '../users.service';
import {MatPaginator} from '@angular/material';
import {PageEvent} from '@angular/material/typings/paginator';
import {PAGE_SIZE} from '../models';


@Component({
  selector: 'app-table-list-posts',
  templateUrl: './table-list-posts.component.html',
  styleUrls: ['./table-list-posts.component.css']
})
export class TableListPostsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'body'];
  dataSource;
  searchValue: string;
  pageSize: number;
  pageIndex: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private userService: UsersService) {
    this.pageSize = 10;
    this.pageIndex = 0;
  }
  handlePagination(data: PageEvent) {
    console.log('paginationEvent', data);
    this.pageIndex = data.pageIndex;
    this.userService.getPosts(this.pageIndex + 1, PAGE_SIZE)
      .subscribe( res => this.dataSource = res);
  }
  ngOnInit() {
    this.userService.getPosts(0, PAGE_SIZE)
      .subscribe(res => this.dataSource = res);
  }
}
