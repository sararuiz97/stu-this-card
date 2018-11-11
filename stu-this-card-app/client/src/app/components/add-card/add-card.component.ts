import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  constructor(private service: CardService) {}

  ngOnInit() {
  }

  addNewCard(f, b) {
    // this.service.addCard(f, b);
  }

}
