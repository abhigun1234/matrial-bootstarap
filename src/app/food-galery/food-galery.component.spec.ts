import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGaleryComponent } from './food-galery.component';

describe('FoodGaleryComponent', () => {
  let component: FoodGaleryComponent;
  let fixture: ComponentFixture<FoodGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
