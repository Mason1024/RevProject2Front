import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { User } from '../models/user';
import { fail } from 'assert';

describe('UserService', () => {
  let user:User;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  })
  .compileComponents()
  );

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
  
  it ("#createUser should create a user and receive the user back", () => {
    const service: UserService = TestBed.get(UserService);
    user = new User(0, "TestUsername", "TestPassword", "TestEmail", "8005551234");
    service.createUser(user).then(info => {
      user = info;
      expect(user.id !== 0);
    }).catch (Response => {
      fail("User not created");
    });
  })

  it("#getUserById should return a user object", () => {
    const service: UserService = TestBed.get(UserService);
    service.getUserById(user.id).then(info => {
      expect(info).toBeDefined();
    }).catch(response => {
      fail("Promise threw an error");
    });
  })

  it("#updateUser should update the user and return the new data", () => {
    const service: UserService = TestBed.get(UserService);
    user.username = "UpdatedUsename";
    service.updateUser(user).then(info => {
      user = info;
      expect(user.username !== "TestUsername")
    })
  })

  it("#deleteUser should remove the test user", () => {
    const service: UserService = TestBed.get(UserService);
    service.deleteUser(user.id);
    service.getUserById(user.id).then(info => {
      fail("Promise shouldn't have succeeded")
    }).catch(response => {
      expect(response);
    });
  })
});
