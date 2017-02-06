/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService]
    });
  });

  it('should ...', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});
