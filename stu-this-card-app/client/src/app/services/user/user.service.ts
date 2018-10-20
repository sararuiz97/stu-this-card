import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000/users';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.uri}`);
  }

  getUsersById(id){
    return this.http.get(`${this.uri}/${id}`);
  }

  addUser(name, description){
    const user = {
      name: name,
      description: description,
    };
    return this.http.post(`${this.uri}/add`, user);
  }

  updateUser(id, name, description){
    const user = {
      name: name,
      description: description
    };
    return this.http.post(`${this.uri}/update/${id}`, user);
  }

  deleteUser(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
