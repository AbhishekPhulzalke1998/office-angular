import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewupdateComponent } from './newupdate.component';

describe('NewupdateComponent', () => {
  let component: NewupdateComponent;
  let fixture: ComponentFixture<NewupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
