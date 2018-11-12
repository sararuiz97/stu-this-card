import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.uri}`);
  }

  getUsersById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  addUser(name, email) {
    const user = {
      name: name,
      email: email,
    };
    return this.http.post(`${this.uri}/add`, user);
  }

  updateUser(id, name, email) {
    const user = {
      name: name,
      email: email
    };
    return this.http.post(`${this.uri}/update/${id}`, user);
  }

  deleteUser(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
