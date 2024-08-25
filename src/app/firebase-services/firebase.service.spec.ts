import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { Firestore } from '@angular/fire/firestore';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Firestore]
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
