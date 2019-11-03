import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { User } from '../models/user';
import { fail } from 'assert';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  })
  .compileComponents()
  );

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it("#getUserById should return a user object", () => {
    const service: UserService = TestBed.get(UserService);
    service.getUserById(332).then(info => {
      expect(info).toBeDefined();
    }).catch(response => {
      fail("Promise threw an error");
    });
  })
});
