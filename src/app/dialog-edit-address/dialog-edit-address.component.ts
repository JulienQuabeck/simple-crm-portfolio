import { Component, inject } from '@angular/core';
import { MatDatepicker, MatDatepickerToggle, MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService } from '../firebase-services/firebase.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  loading = false;
  user: User;



  saveUser(){

  }

}
