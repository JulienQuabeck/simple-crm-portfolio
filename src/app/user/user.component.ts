import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { CommonModule, NgFor } from '@angular/common';
import { FirebaseService } from '../firebase-services/firebase.service';
import { DialogUpdateUserDataComponent } from '../dialog-update-user-data/dialog-update-user-data.component';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    DialogAddUserComponent,
    CommonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(public dialog: MatDialog, public firebase: FirebaseService, private firestore: Firestore) {

  }

  /**
   * This function opens the dialog the add a new user
   */
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  /**
   * This function opens the data update dialog
   * @param userdata all user data
   */
  changeData(userdata: any) {
    this.dialog.open(DialogUpdateUserDataComponent, {
      data: userdata
    });
  }

  /**
   * This function starts the deleteData-function of the firebase.service.ts
   * @param userdata user data
   */
  async deleteData(userdata: any, event: MouseEvent) {
    this.firebase.deleteUser(userdata);
    event.stopPropagation();
  }
}