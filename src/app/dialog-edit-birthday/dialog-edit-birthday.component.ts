import { Component } from '@angular/core';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-birthday',
  standalone: true,
  imports: [],
  templateUrl: './dialog-edit-birthday.component.html',
  styleUrl: './dialog-edit-birthday.component.scss'
})
export class DialogEditBirthdayComponent {

  user: User;


}
