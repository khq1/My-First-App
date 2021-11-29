import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RecordService } from './record.service';

describe('RecordService', () => {
  let service: RecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
