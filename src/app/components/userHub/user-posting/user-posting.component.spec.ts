import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostingComponent } from './user-posting.component';

describe('UserPostingComponent', () => {
  let component: UserPostingComponent;
  let fixture: ComponentFixture<UserPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
