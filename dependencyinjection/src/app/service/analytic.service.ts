import {Inject} from '@angular/core';

import {Metric,AnalyticsImplementation} from '../analytic-demo/matric.interface';

// Instead of using @Injectable use @Inject it will not give any error in angular 8

export class AnalyticService{
    
    constructor(@Inject(String) private implementation:AnalyticsImplementation){}

    record(metric:Metric){
        this.implementation.recordEvent(metric);
    }
}