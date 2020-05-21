import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data:object;
  loading:boolean;

  http:HttpClient;
  constructor( http:HttpClient) { 
    this.http=http;
  }

  ngOnInit(): void {
  }

  makeRequest():void{
      this.loading=true;
      this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data=>{
        this.data=data;
        this.loading=false;
      });
  }

}
