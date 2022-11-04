import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIService, CreateBloguserInput } from './../API.service';
import { BlogUser } from './../blog-user';

@Component({
  selector: 'app-blog-user-create',
  templateUrl: './blog-user-create.component.html',
  styleUrls: ['./blog-user-create.component.css']
})
export class BlogUserCreateComponent implements OnInit {

  public createForm: FormGroup;

  constructor(private apiService: APIService, private fb: FormBuilder) {
	  this.createForm = this.fb.group({
		  fname: '',
		  lname: '',
		  email: '',
		  handle: ''
	  });
  }

  ngOnInit(): void {
  }

  private generateUniqueId() {
	  return Date.now().toString();
  }

  onCreate() {
	  console.warn(this.createForm.value);
	  const blogUserTO: BlogUser = this.createForm.value;
	  console.log(blogUserTO);
	  const blogUser: CreateBloguserInput = {
		  id: this.generateUniqueId(),
		  fname: blogUserTO.fname,
		  lname: blogUserTO.lname,
		  email: blogUserTO.email,
		  handle: blogUserTO.handle
	  };
	  this.apiService.CreateBloguser(blogUser)
	  .then((event) => {
		  console.log('Bloguser created.');
		  this.createForm.reset();
	  }).catch((e) => {
		  console.log('Error creating Bloguser ..', e);
	  });
  }

}
