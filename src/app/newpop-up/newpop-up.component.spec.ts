import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpopUpComponent } from './newpop-up.component';

describe('NewpopUpComponent', () => {
  let component: NewpopUpComponent;
  let fixture: ComponentFixture<NewpopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewpopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
