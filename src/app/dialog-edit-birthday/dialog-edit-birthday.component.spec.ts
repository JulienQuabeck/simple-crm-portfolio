import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBirthdayComponent } from './dialog-edit-birthday.component';
import { Firestore } from '@angular/fire/firestore';

describe('DialogEditBirthdayComponent', () => {
  let component: DialogEditBirthdayComponent;
  let fixture: ComponentFixture<DialogEditBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditBirthdayComponent],
      providers: [Firestore]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
