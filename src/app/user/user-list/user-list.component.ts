import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  posts: any[] = [];
  headers = ['id', 'first_name', 'last_name', 'email'];
  profiles: User[] = [];


  user: User = {
    email: 'jack.lawson@reqres.in',
    first_name: 'jCK',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  };

  contextmenu: boolean = false;

  currentSelectedUser: any;


  entry = 1;
  // selected_profile_id = 1;
  currentPageCounter: number = 1;
  totalNumPages: number = 0;

  constructor(
    private http: HttpClient, 
    private users: UserServiceService,
  ){}

  ngOnInit(): void {
    this.onGet(this.currentPageCounter);
  }

  onGet(pageNumber: number, listLimit: number = 4): void {
    this.users.getUser(pageNumber, listLimit).subscribe((response: any) => {
      this.posts = response['data'];
      this.totalNumPages = response['total_pages'];
      console.log(response);
    });
  }

  onCreate(): void {
    this.users
      .createUser(this.user)
      .subscribe((response) => this.posts.push(response));
  }

  onPatch(): void {
    this.users
      .patchUser(this.user)
      .subscribe((response) => console.log(response));
  }

  

  getProfile(ix: any) {
    this.profiles = this.posts.find((x: { id: any }) => (x.id = ix));
  }

  options(ix: any) {
    this.posts.map((x: { id: any }) => {
      if (x.id == ix) {
        this.contextmenu = !this.contextmenu;
      }
    });
  }

/*   selectedProfile(idx: any) {
    this.selected_profile_id = idx;
    this.profiles.push(this.posts.find((x: { id: any }) => (x.id = idx)));

    console.log(this.profiles);
  } */

  onSelect(value: any) {
    // this.users.rows(value);
    // this.onGet();
    console.log(value);
    if (value) {
      this.currentPageCounter = 1;
      this.onGet(this.currentPageCounter, value);
    }
  }

  onPrev() {
    this.currentPageCounter -= 1;
    this.onGet(this.currentPageCounter);
  }

  onNext() {
    this.currentPageCounter += 1;
    this.onGet(this.currentPageCounter);
  }



  onSubmit(f: any) {}

  createUser() {
  }

  edituser() {

  }

  deleteUser(profile: any): void {
    if (profile) {
      this.users.deleteUser(profile?.id).subscribe((response) => {
        const index = this.posts.findIndex(x => x.id == profile.id);
        this.posts.splice(index, 1);
      });
    }
  }

  setCurrentProfile(post: any) {
    this.currentSelectedUser = post;
  }

}
