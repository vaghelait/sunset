import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class QuotationComponent implements OnInit {

  personalDetailsFormGroup: FormGroup;
  quoteDetailsFormGroup: FormGroup;
  locationDetailsFormGroup: FormGroup;
  productDetailsFormGroup: FormGroup;
  quoteCategoryFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  // constructor(private formBuilder: FormBuilder) { }
  // quoteForm: FormGroup;

  quoteTypes: string[] = ['Collection', 'Delivery', 'Collection & Delivery'];
   ngOnInit(): void {
    this.quoteCategoryFormGroup = this._formBuilder.group({
     quoteType: [this.quoteTypes, [Validators.required]]
    });
    this.personalDetailsFormGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,  Validators.email]],
      contact:[''],
    });
    this.locationDetailsFormGroup = this._formBuilder.group({
      pickupPostcode:['', [Validators.required]],
      dropPostcode:['', [Validators.required]],
      date:['', [Validators.required]],
      time:['', [Validators.required]]
    });
    this.productDetailsFormGroup = this._formBuilder.group({
      productDescription:['', [Validators.required]],
      weight: [['Yes', 'No'], [Validators.required]]
    });

  // this.form()
   }

  // form(){
  //   this.quoteForm = this.formBuilder.group({
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.required,  Validators.email]],
  //     contact:[''],
  //     pickupPostcode:['', [Validators.required]],
  //     dropPostcode:['', [Validators.required]],
  //     date:['', [Validators.required]],
  //     time:['', [Validators.required]],
  //     enquiry:['', [Validators.required]]
  //   });
  // }

  get name() {
    return this.personalDetailsFormGroup.get('name');
  }

  get email() {
    return this.personalDetailsFormGroup.get('email');
  }
  get enquiry() {
    return this.personalDetailsFormGroup.get('enquiry');
  }
  get contact() {
    return this.personalDetailsFormGroup.get('contact');
  }
  get time() {
    return this.personalDetailsFormGroup.get('time');
  }
  get date() {
    return this.personalDetailsFormGroup.get('date');
  }
  get dropPostcode() {
    return this.personalDetailsFormGroup.get('dropPostcode');
  }
  get pickupPostcode() {
    return this.personalDetailsFormGroup.get('pickupPostcode');
  }


  // onSubmit(): void {
  //   console.log(this.quoteForm.value);  
  // }

  // setValue() {
  //   this.quoteForm.setValue(
  //     {
  //       name: this.name.value,
  //       email: this.email.value,
  //       contact: this.contact.value,
  //       enquiry: this.enquiry.value
  //     });
  // }


}
