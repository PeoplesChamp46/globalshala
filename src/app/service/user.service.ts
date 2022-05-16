import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://reqres.in/api/users';

  page = 1;
  per_page= 4;
  id = 3;

  constructor(private http: HttpClient) { 
  }

  getUser():Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?page=${this.page}&per_page=${this.per_page}`);
  }

  createUser(user : User):Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

  updateUser(user : User):Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/5`, user);
  }

  patchUser(user : User):Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${this.id}`, user);
  }

  deleteUser(id : number):Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.id}`);
  }

  rows(value : any){

    this.per_page = value;
    this.getUser();

  }

  incrementPage(){

    this.page += 1;
    this.getUser();
  }
  decrementPage(){

    this.page -= 1;
    this.getUser();
  }
}
