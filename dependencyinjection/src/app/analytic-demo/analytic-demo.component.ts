import { Component, OnInit } from '@angular/core';

import {AnalyticService} from '../service/analytic.service';

@Component({
  selector: 'app-analytic-demo',
  templateUrl: './analytic-demo.component.html',
  styleUrls: ['./analytic-demo.component.css']
})
export class AnalyticDemoComponent implements OnInit {

  constructor(private analytic:AnalyticService) {
    this.analytic.record({
      eventName:'componentCreated',
      scope:'AnalyticDemoComponent'
    });
   }

  ngOnInit(): void {
    this.analytic.record({
      eventName:'componentOnInit',
      scope:'AnalyticDemoComponent'
    });
  }

  buyButtonPressed(product:string){
    this.analytic.record({
      eventName:'buyButtonPressed',
      scope:product
    });
  }

}
