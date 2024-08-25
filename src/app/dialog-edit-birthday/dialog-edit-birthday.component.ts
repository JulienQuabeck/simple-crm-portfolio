import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { MAT_DATE_LOCALE, MatCommonModule, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseService } from '../firebase-services/firebase.service';

@Component({
  selector: 'app-dialog-edit-birthday',
  standalone: true,
  imports: [
    MatCommonModule,
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
  templateUrl: './dialog-edit-birthday.component.html',
  styleUrl: './dialog-edit-birthday.component.scss'
})
export class DialogEditBirthdayComponent {
  
  loading = false;
  user: User = new User;

  constructor(private firebase: FirebaseService){

  }

  saveUser(){
    this.loading = true;
    this.firebase.updateUser(this.user);
    this.loading = false;
  }

}
