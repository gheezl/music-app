import { TestBed } from '@angular/core/testing';

import { SaveSongService } from './save-song.service';

describe('SaveSongService', () => {
  let service: SaveSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
