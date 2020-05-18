import {Component,Input,HostBinding} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector:'price-display',
    template:'<div class="price-display">\${{price}}</div>'
})

export class PriceDisplayComponent{
    @Input() price:number;
}