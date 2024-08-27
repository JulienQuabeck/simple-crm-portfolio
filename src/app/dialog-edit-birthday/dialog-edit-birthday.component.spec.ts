import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBirthdayComponent } from './dialog-edit-birthday.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../app.config';
import { CommonModule } from '@angular/common';

describe('DialogEditBirthdayComponent', () => {
  let component: DialogEditBirthdayComponent;
  let fixture: ComponentFixture<DialogEditBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditBirthdayComponent, 
        BrowserModule, 
        BrowserAnimationsModule,
        CommonModule
      ],
      providers: [
        importProvidersFrom([
          provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())
        ]),]
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
