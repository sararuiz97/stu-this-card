import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { CardComponent } from '../card/card.component';
import { Store } from '@ngrx/store';
import { Collection } from '../../models/collection.model';
import { AppState } from '../../app.state';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Object = [];
  @ViewChildren(CardComponent) mc: QueryList<CardComponent>;
  currCollection: Collection;

  constructor(private service: CardService, private store: Store<AppState>) {
    this.store.select('collection').forEach(el => {
      this.currCollection = el;
    });
  }

  ngOnInit() {
    this.service.getCardsByCollection(this.currCollection.id).forEach(card => {
      this.cards = card;
    });
  }

  flipCard(i) {
    const arr = this.mc.toArray();
    arr[i].flipIt();
  }
}
