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
      name: ['', [Validators.required]],
      email: ['', [Validators.required,  Validators.email]],
      contact:[''],
      enquiry:['', [Validators.required]]
    });
  }

  get name() {
    return this.quoteForm.get('name');
  }

  get email() {
    return this.quoteForm.get('email');
  }
  get enquiry() {
    return this.quoteForm.get('enquiry');
  }
  get contact() {
    return this.quoteForm.get('contact');
  }

  onSubmit(): void {
    console.log(this.quoteForm.value);  
  }

  setValue() {
    this.quoteForm.setValue(
      {
        name: this.name.value,
        email: this.email.value,
        contact: this.contact.value,
        enquiry: this.enquiry.value
      });
  }

}
