import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { BrowserModule } from '@angular/platform-browser';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  const firebaseConfig = { "projectId": "simple-crm-b3eb1", "appId": "1:180299554180:web:d2a6cbf2817483b2bbd1d1", "storageBucket": "simple-crm-b3eb1.appspot.com", "apiKey": "AIzaSyDGoGP4IKmiruKfwaPUWVPxR9dsCF7UQdI", "authDomain": "simple-crm-b3eb1.firebaseapp.com", "messagingSenderId": "180299554180" };
  const firebaseApp = initializeApp(firebaseConfig);


describe('Firestore Test', () =>{
  let firestore: Firestore;
})

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddUserComponent, BrowserModule,
        provideFirebaseApp(()=> initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore(firebaseApp))],
      providers: [Firestore]
    })
    .compileComponents();

    // firestore = inject(Firestore);
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});