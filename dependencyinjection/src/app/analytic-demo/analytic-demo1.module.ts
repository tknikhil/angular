import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';

import {AnalyticService} from '../service/analytic.service';
import { AnalyticsImplementation, Metric } from './matric.interface';

// This is just to check Factory Dependency given by Angular 8 for real code check out analytic-demo.module.ts

@NgModule({
    imports:[CommonModule],
    providers:[{
        provide: AnalyticService,
        useFactory(){
            const loggingImplementation:AnalyticsImplementation={
                recordEvent:(metric:Metric):void=>{
                    console.log("This matric is:",metric);
                }
            };

            return new AnalyticService(loggingImplementation);
        }
}],
    declarations:[]
})

export class AnalyticDemoModule{}