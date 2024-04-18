import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpopUp1Component } from './newpop-up1.component';

describe('NewpopUp1Component', () => {
  let component: NewpopUp1Component;
  let fixture: ComponentFixture<NewpopUp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewpopUp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpopUp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
