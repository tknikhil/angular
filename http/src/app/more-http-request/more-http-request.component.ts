import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RequestOptions } from 'https';

@Component({
  selector: 'app-more-http-request',
  templateUrl: './more-http-request.component.html'
})
export class MoreHttpRequestComponent implements OnInit {

  data:Object;
  loading:boolean;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  makePost():void{
    this.loading=true;
    this.http.post('http://jsonplaceholder.typicode.com/posts',
                      JSON.stringify({
                        body:'bar',
                        title:'foo',
                        userId:1
                      })).subscribe((res:Response)=>{
                        this.data=res.json();
                        this.loading=false;
                      });
  }

  makeDelete():void{
    this.loading=true;
    this.http.delete('http://jsonplaeholder.typicode.com/posts/1')
                      .subscribe((res:Response)=>{
                        this.data=res.json();
                        this.loading=false;
                      });
  }

  makeHeaders():void{
   const header=new HttpHeaders().append('X-API-TOKEN', 'ng-book');
   
   this.http.get('http://jsonplaeholder.typicode.com/posts/1',{header})
                      .subscribe((res:Response)=>{
                          this.data=res.json();
                      });

  }

}
