import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { CardComponent } from '../card/card.component';
import { Store } from '@ngrx/store';
import { Collection } from '../../models/collection.model';
import { AppState } from '../../app.state';
import { Card } from '../../services/card/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Card[];
  @ViewChildren(CardComponent) mc: QueryList<CardComponent>;
  currCollection: Collection;

  constructor(private service: CardService, private store: Store<AppState>) {
    this.store.select('collection').forEach(el => {
      this.currCollection = el;
    });
  }

  ngOnInit() {
    this.fetchCards();
  }

  fetchCards() {
    this.service.getCardsByCollection(this.currCollection.id)
    .subscribe((data: Card[]) => {
      this.cards = data;
    });
  }


  flipCard(i) {
    const arr = this.mc.toArray();
    arr[i].flipIt();
  }
}
