import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection/collection.service';
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

  addNewCollection(name, model) {
    if (!model || model === '' ) {
      this.service.addCollection(name, false, '').subscribe(() => {
        this.router.navigate(['/collections']);
      });
    } else {
      this.service.addCollection(name, true, model).subscribe(() => {
        this.router.navigate(['/collections']);
      });
    }
  }

}
