import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialDemoComponent } from './matrial-demo.component';

describe('MatrialDemoComponent', () => {
  let component: MatrialDemoComponent;
  let fixture: ComponentFixture<MatrialDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrialDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
