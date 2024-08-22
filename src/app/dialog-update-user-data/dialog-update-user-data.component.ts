import { Component, Inject, inject } from '@angular/core';
import { MatDatepicker, MatDatepickerToggle, MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MAT_DATE_LOCALE, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../firebase-services/firebase.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dialog-update-user-data',
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
    MatButtonModule
  ],
  templateUrl: './dialog-update-user-data.component.html',
  styleUrl: './dialog-update-user-data.component.scss'
})
export class DialogUpdateUserDataComponent {

  user: User = new User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public firebase: FirebaseService){  
  }

  creatingUpdatedUser(){
    return {
      id: this.data.id,
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      mail: this.data.mail,
      birthDate: this.data.birthDate,
      street: this.data.street,
      zipCode: this.data.zipCode,
      city: this.data.city
    }
  }

  saveUpdates(){  
    this.firebase.updateUser(this.creatingUpdatedUser());  
  }

}
