import { Component, OnInit } from '@angular/core';

import {UserserviceService} from '../userservice.service';
@Component({
  selector: 'app-product-ng-module',
  templateUrl: './product-ng-module.component.html',
  styleUrls: ['./product-ng-module.component.css']
})
export class ProductNgModuleComponent implements OnInit {

  userName:string;
 
  constructor(private userservice:UserserviceService) { }

   signIn():void{
     this.userservice.setUser({name:'Nikhil'});
     this.userName=this.userservice.getUser().name;
     console.log('User name is :',this.userName);
   }
 
   
  ngOnInit(): void {
  }

}
