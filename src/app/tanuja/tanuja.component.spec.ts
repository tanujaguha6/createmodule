import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanujaComponent } from './tanuja.component';

describe('TanujaComponent', () => {
  let component: TanujaComponent;
  let fixture: ComponentFixture<TanujaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanujaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
