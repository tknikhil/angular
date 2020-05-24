import { Component, OnInit, Output,EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../search-result.model';
import { YoutubeSearchService } from 'src/app/service/youtube-search.service';
import { Observable,fromEvent } from 'rxjs';

import {map,filter,debounceTime, tap, switchAll} from 'rxjs/operators'

@Component({
  selector: 'app-search-box',
  template:`<input type="text" class="form-control" placeholder="Search" autofocus>`
})
export class SearchBoxComponent implements OnInit {

  @Output() loading:EventEmitter<boolean> =new EventEmitter<boolean>();
  @Output() results:EventEmitter<SearchResult[]> =new EventEmitter<SearchResult[]>();

  constructor(private youtube:YoutubeSearchService,private el:ElementRef) { }

  ngOnInit(): void {

    const obs:Observable<any>=fromEvent(this.el.nativeElement,'keyup').pipe(
      map((e:any)=>e.target.value),
      filter((text:string)=>text.length>1),
      debounceTime(250),
      tap(()=>this.loading.emit(true)),
      map((query:string)=>this.youtube.search(query)),
      switchAll()
    );
   
    obs.subscribe( 
      (results:SearchResult[])=>{
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err:any)=>{
        console.log(err);
        this.loading.emit(false);
      },
      ()=>{
        this.loading.emit(false);
      }
    );
  }

}
