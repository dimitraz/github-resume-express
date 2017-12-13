import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterestsComponent } from './edit-interests.component';

describe('EditInterestsComponent', () => {
  let component: EditInterestsComponent;
  let fixture: ComponentFixture<EditInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
