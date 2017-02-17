/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaguesService } from './leagues.service';

describe('LeaguesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaguesService]
    });
  });

  it('should ...', inject([LeaguesService], (service: LeaguesService) => {
    expect(service).toBeTruthy();
  }));
});
