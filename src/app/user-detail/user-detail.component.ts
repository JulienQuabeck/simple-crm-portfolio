import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase-services/firebase.service';
import { Firestore, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditBirthdayComponent } from '../dialog-edit-birthday/dialog-edit-birthday.component';
import { DialogEditUserHeaderComponent } from '../dialog-edit-user-header/dialog-edit-user-header.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: string | null = '';
  user: User = new User;

  constructor(private router: ActivatedRoute,
    public firebase: FirebaseService,
    private firestore: Firestore,
    public dialog: MatDialog) {   

    this.router.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      if (this.userId) {
        const userRef = this.firebase.getSingleUserRef('users', this.userId);
        getDoc(userRef).then(docSnapshot => {
          if (docSnapshot.exists()) {
            this.user = new User(docSnapshot.data());
          } else {
            console.log('No such document!');
          }
        }).catch(error => {
          console.error("Error getting document:", error);
        });
      }
    });
  }

  openEditAddressDialog() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user);
  }

  openEditBirthdayDialog() {
    const dialog = this.dialog.open(DialogEditBirthdayComponent);
    dialog.componentInstance.user = new User(this.user);
  }

  openEditHeaderDialog() {
    const dialog = this.dialog.open(DialogEditUserHeaderComponent);
    dialog.componentInstance.user = new User(this.user);
  }
}
