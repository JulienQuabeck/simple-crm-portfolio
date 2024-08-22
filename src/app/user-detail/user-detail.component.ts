import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase-services/firebase.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: string | null = '';
  user: any = {};

  constructor(private router: ActivatedRoute, public firebase: FirebaseService, private firestore: Firestore) { 
    this.router.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      if(this.userId){
        this.user = this.firebase.getSingleUserRef('users', this.userId), this.firebase.getCleanJson(this.user);
        console.log(this.user.firstName);
        
      }
    })
   }

}
