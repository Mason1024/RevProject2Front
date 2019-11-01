import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { UserHubComponent } from './user-hub.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserPostingContainerComponent } from '../user-posting-container/user-posting-container.component';
import { PhonePipe } from 'src/app/pipes/phone.pipe';

describe('UserHubComponent', () => {
  let component: UserHubComponent;
  let fixture: ComponentFixture<UserHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHubComponent, UserPostingContainerComponent, PhonePipe ],
      imports: [ HttpClientTestingModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatCardModule, MatInputModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
