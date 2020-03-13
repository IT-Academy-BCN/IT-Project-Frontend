import { TestBed } from '@angular/core/testing';

import { StudentFileService } from './student-file.service';

describe('StudentFileService', () => {
  let service: StudentFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
