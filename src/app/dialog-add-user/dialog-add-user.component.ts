import { Component, inject } from '@angular/core';
import { MatDatepicker, MatDatepickerToggle, MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MAT_DATE_LOCALE, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../firebase-services/firebase.service';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDatepicker, 
    MatDatepickerToggle, 
    MatDatepickerModule, 
    MatDialogActions, 
    MatDialogContent, 
    MatDialogModule, 
    MatFormField, 
    MatLabel, 
    MatInputModule, 
    FormsModule, 
    MatNativeDateModule, 
    MatButtonModule
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();

  constructor(public firebase: FirebaseService) {
  }

  saveUserData: any;

  saveUser() {
    this.saveUserData = this.firebase.setUserObject(this.user);  
    this.firebase.addUser(this.saveUserData);  
  }
}
