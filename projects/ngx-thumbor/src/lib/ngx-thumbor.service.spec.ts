import { TestBed } from '@angular/core/testing';

import { NgxThumborService } from './ngx-thumbor.service';

describe('NgxThumborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxThumborService = TestBed.get(NgxThumborService);
    expect(service).toBeTruthy();
  });
});
