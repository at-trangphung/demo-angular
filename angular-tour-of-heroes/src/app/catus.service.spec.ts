import { TestBed } from '@angular/core/testing';
import { CatusService } from './catus.service';

describe('CatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatusService = TestBed.get(CatusService);
    expect(service).toBeTruthy();
  });

});
