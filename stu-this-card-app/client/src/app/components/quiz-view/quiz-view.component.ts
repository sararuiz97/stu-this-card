import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CardComponent } from '../card/card.component';
import { Card } from 'src/app/services/card/card.model';
import { Collection } from 'src/app/models/collection.model';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {


  @ViewChild('currentCard') currentCard: CardComponent;
  cards: Card[];
  displayedCard: number;
  totalCards: number;
  currCollection: Collection;

  constructor(private service: CardService, private store: Store<AppState> ) {
    this.store.select('collection').forEach(el => {
      this.currCollection = el;
    });
  }

  ngOnInit() {
    this.fetchCards();
    this.displayedCard = 0;
    this.totalCards = this.cards.length;
    this.cards = this.shuffle(this.cards);
  }

  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  fetchCards() {
    this.service.getCardsByCollection(this.currCollection.id)
    .subscribe((data: Card[]) => {
      this.cards = data;
    });
  }

  changeDisplayedCard() {
    const next = this.displayedCard + 1;
    if (next > this.totalCards ) {
      this.displayedCard = next;
    } else {
      this.displayedCard = 0;
    }
  }

  endQuiz() {
    //
  }

  flipCard() {
    this.currentCard.flipIt();
  }

}
