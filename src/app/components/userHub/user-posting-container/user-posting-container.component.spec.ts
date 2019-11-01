import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostingContainerComponent } from './user-posting-container.component';
import { MatCardModule } from '@angular/material';
import { PhonePipe } from 'src/app/pipes/phone.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('UserPostingContainerComponent', () => {
  let component: UserPostingContainerComponent;
  let fixture: ComponentFixture<UserPostingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPostingContainerComponent, PhonePipe ],
      imports: [ MatCardModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
