import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserHeaderComponent } from './dialog-edit-user-header.component';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

describe('DialogEditUserHeaderComponent', () => {
  let component: DialogEditUserHeaderComponent;
  let fixture: ComponentFixture<DialogEditUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserHeaderComponent],
      providers:[Firestore, FirestoreModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
