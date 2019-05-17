import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private infoUsers: UsersService) {}
 ngOnInit(): void {
   /*
   this.infoUsers.getUserPostById(3)
     .subscribe(post => console.log(post));
   this.infoUsers.getUserById(3)
     .subscribe(user => console.log(user));
   this.infoUsers.getPostAndUser(10)
     .subscribe( postWithUser => console.log(postWithUser));
   this.infoUsers.patchSomePost(this.url, {
     title: 'lol'
   }, 15).subscribe(resp => console.log(resp));
   this.infoUsers.getUserByTitle('est ipsam')
     .subscribe( postByTitle => console.log(postByTitle));
   this.infoUsers.getPostsAndUsers()
     .subscribe(response => console.log(response));
    */
 }
}
