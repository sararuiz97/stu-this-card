import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  uri = 'http://localhost:4000/cards';

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get(`${this.uri}`);
  }

  getCardsById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  getCardsByCollection (collectionId) {
    return this.http.get(`${this.uri}/cardscollection/${collectionId}`);
  }

  addCard(front, back, collection) {
    const card = {
      its_collection: collection,
      front: {
        text: front,
      },
      back: {
        text: back,
      }
    };
    return this.http.post(`${this.uri}/add`, card);
  }

  updateCard(id, front, back) {
    const card = {
      front: front,
      back: back
    };
    return this.http.post(`${this.uri}/update/${id}`, card);
  }

  deleteCard(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
