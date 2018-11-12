import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('login_card') loginCard: CardComponent;

  constructor() {}

  ngOnInit() {
  }

  flipCard() {
    this.loginCard.flipIt();
  }
}
