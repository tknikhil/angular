import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../youtube-search/search-result.model';


export const YOUTUBE_API_KEY="AIzaSyBaC77EcBjZe7M8QuESWGieJmfZ9K5Hb3c";
export const YOUTUBE_API_URL="https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YoutubeSearchService {

  constructor(private http:HttpClient,
                @Inject(YOUTUBE_API_KEY)private api_key:string,
                @Inject(YOUTUBE_API_URL)private api_url:string) { }

  
  search(query:string):Observable<SearchResult[]>{
    const param:string=[
                        'q=${query}',
                        'key=${this.api_key}',
                        'part=snippet',
                        'type=video',
                        'maxResults=10'
                      ].join('&');
    const queryURL='${this.api_url}?${param}';

    return this.http.get(queryURL).pipe(map((response:Response)=>{
      return (<any>response.json()).items.map(item =>{
        return new SearchResult({
          id:item.id.videoId,
          title:item.snippet.title,
          description:item.snippet.description,
          thumbnailURL:item.snippet.thumbnails.high.url
        });
      });
    }));
  }
}
