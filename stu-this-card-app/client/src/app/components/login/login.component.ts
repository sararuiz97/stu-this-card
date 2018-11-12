import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CollectionActions from '../../actions/collection.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  name: String;
  email: String;
  currCreator: String;


  @ViewChild('login_card') loginCard: CardComponent;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select('collection').forEach(el => {
      this.currCreator = el.creator;
    });
  }

  ngOnInit() {
  }


    onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
        if (data.success) {
          const theCreator = data.user.id;
          this.authService.storeUserData(data.token, data.user);
          this.store.dispatch(new CollectionActions.ChangeCreator(theCreator));
          this.router.navigate(['collections']);
        } else {
          this.router.navigate(['login']);
        }
    });
  }

  flipCard() {
    this.loginCard.flipIt();
  }
}
