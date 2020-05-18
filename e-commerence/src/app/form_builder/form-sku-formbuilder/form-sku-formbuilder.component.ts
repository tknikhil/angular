import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { CustomeValidator } from 'src/app/validation-custome/customevalidation.component';

@Component({
  selector: 'app-form-sku-formbuilder',
  templateUrl: './form-sku-formbuilder.component.html',
  styleUrls: ['./form-sku-formbuilder.component.css']
})
export class FormSkuFormbuilderComponent implements OnInit {
  myForm:FormGroup;
  sku:string;
 // sku:AbstractControl;
    constructor(fb:FormBuilder) { 

      this.myForm=fb.group({
        'sku':['',Validators.compose([Validators.required,CustomeValidator.skuValidation])]
      });

     // this.sku=this.myForm.controls['sku'];
    }

  ngOnInit(): void {
  }

  onSubmit(myForm:string):void{
    console.log('You submitted value',myForm);
  }
}
