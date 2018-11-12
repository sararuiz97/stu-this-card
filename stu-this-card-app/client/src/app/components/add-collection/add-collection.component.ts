import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection/collection.service';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {

  name: String;
  createForm: FormGroup;
  creator_id: String;
  selectedModel: String = 'nothing';

  constructor(
    private router: Router,
    private service: CollectionService,
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {
    this.createForm = this.fb.group({
      name: '',
      model: '',
    });
    this.store.select('collection').forEach(el => {
      this.creator_id = el.creator;
    });
  }

  ngOnInit() {
  }

  selectModel(event) {
    this.selectedModel = event.target.value;
  }

  addNewCollection(name) {
    if (this.selectedModel === 'nothing' ) {
      this.service.addCollection(name, false, '', this.creator_id).subscribe(() => {
        this.router.navigate(['/collections']);
      });
    } else {
      this.service.addCollection(name, true, this.selectedModel, this.creator_id).subscribe(() => {
        this.router.navigate(['/collections']);
      });
    }
  }

}
