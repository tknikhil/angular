import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  userName:string;
  userservice:UserserviceService;
  constructor() {
    const injector:any=ReflectiveInjector.resolveAndCreate([UserserviceService]);
    this.userservice=injector.get(UserserviceService);
   }

   signIn():void{
     this.userservice.setUser({name:'Nikhil'});
     this.userName=this.userservice.getUser().name;
     console.log('User name is :',this.userName);
   }
 
   
  ngOnInit(): void {
  }

}
