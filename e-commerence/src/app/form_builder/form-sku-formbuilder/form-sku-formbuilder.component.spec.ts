import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuFormbuilderComponent } from './form-sku-formbuilder.component';

describe('FormSkuFormbuilderComponent', () => {
  let component: FormSkuFormbuilderComponent;
  let fixture: ComponentFixture<FormSkuFormbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuFormbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
