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
  creator_id: String;

  constructor(
    private service: CollectionService,
    private router: Router,
    private store: Store<AppState>) {
      this.store.select('collection').forEach(el => {
        this.creator_id = el.creator;
      });
    }

  ngOnInit() {
    // Fixme get creator id from somewhere
    this.service.getCollectionByCreator(this.creator_id).forEach(collection => {
      this.colls = collection;
    });
  }

  goToCards(my_collection) {
    const col: Collection = {
      name: my_collection.name,
      id: my_collection._id,
      its_3d: my_collection.its_3d,
      model_3d: my_collection.model_3d,
      creator: ''
      // FIX HERE ^
    };
    this.store.dispatch(new CollectionActions.ChangeCollection(col));
    if (my_collection.its_3d) {
      this.router.navigate(['3d']);
    } else {
      this.router.navigate(['dashboard']);
    }
  }

}
