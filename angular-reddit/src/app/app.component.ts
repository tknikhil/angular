import { Component } from '@angular/core';
import {Article} from './article/article.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  article:Article[];

  constructor(){
    this.article=[
      new Article('Angular 2','http://angular.io',3),
      new Article('FullStack','http://fullstack.io',2),
      new Article('Google','http://google.com',1)
    
    ];
  }
 addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
   console.log('Article title : ${title.value} Article Link :${link.value}');
  
this.article.push(new Article(title.value,link.value,0));
title.value="";
link.value="";

   return false;
 }

 sortedArticle():Article[]{
   return this.article.sort((a:Article,b:Article)=>b.votes-a.votes);
 }
}
