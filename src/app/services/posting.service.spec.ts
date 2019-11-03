import { TestBed } from '@angular/core/testing';

import { PostingService } from './posting.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  })
  .compileComponents()
  );

  it('should be created', () => {
    const service: PostingService = TestBed.get(PostingService);
    expect(service).toBeTruthy();
  });
});
