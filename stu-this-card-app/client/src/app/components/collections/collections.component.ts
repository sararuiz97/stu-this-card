import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection/collection.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Collection } from '../../models/collection.model';
import * as CollectionActions from '../../actions/collection.actions';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  colls: Object = [];

  constructor(
    private service: CollectionService,
    private router: Router,
    private store: Store<AppState>) {}

  ngOnInit() {
    // Fixme get collection id from somewhere
    this.service.getCollections().forEach(collection => {
      this.colls = collection;
    });
  }

  goToCards(my_collection) {
    const col: Collection = {
      name: my_collection.name,
      id: my_collection._id,
    };
    console.log(my_collection);
    this.store.dispatch(new CollectionActions.ChangeCollection(col));
    this.router.navigate(['dashboard']);
  }

}