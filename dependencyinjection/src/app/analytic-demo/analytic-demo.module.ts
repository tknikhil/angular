import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import {HttpClientModule,HttpClient} from '@angular/common/http';

import {AnalyticService} from '../service/analytic.service';
import { AnalyticsImplementation, Metric } from './matric.interface';

// HttpModule,Http is depricated in angular 8 Use HttpClient and HttpClientModule

@NgModule({
    imports:[
        CommonModule,
        HttpClientModule
            ],
    providers:[
        {
        provide: 'API_URL',
        useValue:'http://google.com'
        },
        {
        provide:AnalyticService,
        deps:[HttpClient,'API_URL'],
        useFactory(http: HttpClient,apiUrl:string){
            const loggingImplementation:AnalyticsImplementation={
                recordEvent:(metric:Metric):void=>{
                    console.log("This matric is:",metric);
                    console.log("Sending to :",apiUrl);
                }
            };

            return new AnalyticService(loggingImplementation);
        }
}],
    declarations:[]
})

export class AnalyticDemoModule{}