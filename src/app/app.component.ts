import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'globalshala';

  posts : any;

  constructor(private http : HttpClient){
  }

  getPosts(){
    this.posts = this.http.get(`https://reqres.in/api/users?page=1`)
  }
}
