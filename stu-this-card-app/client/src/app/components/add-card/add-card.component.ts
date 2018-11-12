import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  front: String;
  back: String;
  createForm: FormGroup;

  constructor(private router: Router, private service: CardService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
          front: '',
          back: ''
        });
  }

  ngOnInit() {
  }


  onSubmitCard(front, back) {
    this.service.addCard(front, back).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
