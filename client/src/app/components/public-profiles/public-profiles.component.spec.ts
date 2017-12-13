import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfilesComponent } from './public-profiles.component';

describe('PublicProfilesComponent', () => {
  let component: PublicProfilesComponent;
  let fixture: ComponentFixture<PublicProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
