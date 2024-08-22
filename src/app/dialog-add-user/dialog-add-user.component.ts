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
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    CommonModule,
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
    MatButtonModule,
    MatProgressBarModule
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
  loading = false;

  constructor(public firebase: FirebaseService) {
  }

  saveUserData: any;

  saveUser() {
    this.loading = true;
    this.saveUserData = this.firebase.setUserObject(this.user);  
    this.firebase.addUser(this.saveUserData);  
    this.loading = false;
  }
}
