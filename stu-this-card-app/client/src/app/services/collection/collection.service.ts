import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  uri = 'http://localhost:4000/collections';

  constructor(private http: HttpClient) { }

  getCollections() {
    return this.http.get(`${this.uri}`);
  }

  getCollectionsById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  addCollection(name, creator) {
    const collection = {
      name: name,
      creator: creator
    };
    return this.http.post(`${this.uri}/add`, collection);
  }

  updateCollection(id, name, creator) {
    const collection = {
      name: name,
      creator: creator
    };
    return this.http.post(`${this.uri}/update/${id}`, collection);
  }

  deleteCollection(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
