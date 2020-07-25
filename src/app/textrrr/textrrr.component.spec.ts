import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextrrrComponent } from './textrrr.component';

describe('TextrrrComponent', () => {
  let component: TextrrrComponent;
  let fixture: ComponentFixture<TextrrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextrrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextrrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
