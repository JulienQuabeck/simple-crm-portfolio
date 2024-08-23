import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../firebase-services/firebase.service';

@Component({
  selector: 'app-dialog-edit-user-header',
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
    MatButtonModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-edit-user-header.component.html',
  styleUrl: './dialog-edit-user-header.component.scss'
})
export class DialogEditUserHeaderComponent {

  user: any;
  loading = false;

  constructor(private firebase: FirebaseService){

  }

  saveUser(){
    this.loading = true;
    this.firebase.updateUser(this.user);
    this.loading = false;
  }
}
