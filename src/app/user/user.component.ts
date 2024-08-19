import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../firebase-services/firebase.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, DialogAddUserComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(public dialog: MatDialog, public firebase: FirebaseService) {

  }

  /**
   * This function opens the dialog the add a new user
   */
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  changeData(item:any){
    console.log(item);
  }
}
