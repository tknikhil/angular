import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNgModuleComponent } from './product-ng-module.component';

describe('ProductNgModuleComponent', () => {
  let component: ProductNgModuleComponent;
  let fixture: ComponentFixture<ProductNgModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNgModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNgModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
