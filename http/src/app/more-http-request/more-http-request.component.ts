import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';


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
                      })).subscribe(data=>{
                       this.data=data;
                        this.loading=false;
                      });
  }

  makeDelete():void{
    this.loading=true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
                      .subscribe(data=>{
                        this.data=data;
                        this.loading=false;
                      });
  }

  makeHeaders():void{
   const headers:HttpHeaders=new HttpHeaders({'X-API-TOKEN': 'ng-book'});
   
 const req=new HttpRequest('GET','http://jsonplaceholder.typicode.com/posts/1',{
   headers:headers
 });
 this.http.request(req).subscribe(data=>{
   this.data=data['body'];
 });
}
}
