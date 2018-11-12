import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { CardComponent } from '../card/card.component';
import { Card } from '../../services/card/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   @ViewChildren(CardComponent) mc: QueryList<CardComponent>;
   cards: Card[];

  constructor(private service: CardService) {}

  ngOnInit() {
    this.fetchCards();
  }

  fetchCards() {
  this.service
    .getCards()
    .subscribe((data: Card[]) => {
      this.cards = data;
      console.log('Data requested ...');
      console.log(this.cards);
    });
}


  flipCard(i) {
    const arr = this.mc.toArray();
    arr[i].flipIt();
  }
}
