import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../../services/card/card.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Collection } from 'src/app/models/collection.model';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  front: String;
  back: String;
  createForm: FormGroup;
  currCollection: Collection;

  constructor(private router: Router,
    private service: CardService,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.createForm = this.fb.group({
      front: '',
      back: ''
    });
    this.store.select('collection').forEach(el => {
      this.currCollection = el;
    });
  }

  ngOnInit() {
  }


  onSubmitCard(front, back) {
    this.service.addCard(front, back, this.currCollection.id).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
