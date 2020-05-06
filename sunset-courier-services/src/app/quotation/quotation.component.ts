import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  quoteForm: FormGroup;


  ngOnInit(): void {
  this.form()
  }

  form(){
    this.quoteForm = this.formBuilder.group({
      'name': [''],
      'email': ['', [Validators.required,  Validators.email]],
      'contact':['']
    });
  }

}
