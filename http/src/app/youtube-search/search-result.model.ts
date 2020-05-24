export class SearchResult{
    id:string;
    title:string;
    description:string;
    thumbnailURL:string;
    videoURL:string;

    constructor(obj?:any){
        this.id=obj &&  obj.id  ||null;
        this.title=obj  &&  obj.title  ||null;
        this.description=obj    &&  obj.description ||null;
        this.thumbnailURL=obj   &&  obj.thumbnailURL    ||null;
        this.videoURL=obj   &&  obj.videoURL    ||  `https://www.youtube.com/watch?v=${this.id}`;    
    }
}