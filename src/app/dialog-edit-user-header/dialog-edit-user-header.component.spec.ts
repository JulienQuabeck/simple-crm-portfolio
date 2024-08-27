import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserHeaderComponent } from './dialog-edit-user-header.component';
import { Firestore, FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../app.config';

describe('DialogEditUserHeaderComponent', () => {
  let component: DialogEditUserHeaderComponent;
  let fixture: ComponentFixture<DialogEditUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditUserHeaderComponent,
        BrowserModule, 
        BrowserAnimationsModule
      ],
      providers:[
      importProvidersFrom([
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
      ]),]
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
