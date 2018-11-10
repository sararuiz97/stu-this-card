import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Object = [];
  @ViewChildren(CardComponent) mc: QueryList<CardComponent>;

  constructor(private service: CardService) {}

  ngOnInit() {
    this.service.getCards().forEach(card => {
      this.cards = card;
    });
  }

  flipCard(i) {
    const arr = this.mc.toArray();
    arr[i].flipIt();
  }
}
