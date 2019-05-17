import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {PAGE_SIZE} from './models';

export interface PeriodicElement {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly BASE_URL = 'https://jsonplaceholder.typicode.com/';
  urlAllPosts = 'https://jsonplaceholder.typicode.com/posts?_page=';
  urlAllUsers = 'https://jsonplaceholder.typicode.com/users';

  userData: PeriodicElement[] = [];

  constructor(private http: HttpClient) {
  }
  getAllPosts(id: number) {
    return this.http.get(this.urlAllPosts + id);
  }

  getAllUser() {
    return this.http.get(this.urlAllUsers);
  }
  getPostsAndUsers(pageIndex: number, pageSize = PAGE_SIZE) {
    return forkJoin([
      this.getPosts(pageIndex, pageSize),
      this.getAllUser()
    ]).pipe(
      map((res: [any[], any[]]) => {
        const posts = res[0];
        const users = res[1];
        users.map(user => {
          posts.map(post => {
            if (post.userId === user.id) {
              this.userData.push(Object.assign(post, {user}));
            }
          });
        });
        return this.userData;
      })
    );
  }

  getPosts(pageIndex: number, pageSize = PAGE_SIZE) {
    return this.http.get(`${this.BASE_URL}posts?_page=${pageIndex}&_limit=${pageSize}`);
  }
}
