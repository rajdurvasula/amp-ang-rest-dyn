import { Component, OnInit } from '@angular/core';
import { APIService, Bloguser } from './../API.service';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { BlogUser } from './../blog-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public blogUsers: Array<BlogUser> = [];

  constructor(private apiService: APIService) { }

  async ngOnInit() {
    await this.apiService.ListBlogusers().then(users => {
      let userItems = users.items;
      userItems.forEach(userItem => {
	      let user: BlogUser = {
		      fname: userItem!.fname,
		      lname: userItem!.lname,
		      email: userItem!.email,
		      handle: userItem!.handle
	      };
	      this.blogUsers.push(user);
      });
    });
  }


}
