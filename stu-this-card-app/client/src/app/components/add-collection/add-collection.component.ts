import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection/collection.service';
import { Collection } from '../../services/collection/collection.mymodel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {

  name: String;
  createForm: FormGroup;

  constructor(
    private router: Router,
    private service: CollectionService,
    private fb: FormBuilder,
  ) {
    this.createForm = this.fb.group({
      name: '',
    });
  }

  ngOnInit() {
  }

  addNewCollection(name) {
    this.service.addCollection(name).subscribe(() => {
      this.router.navigate(['/collections']);
    });
  }

}
