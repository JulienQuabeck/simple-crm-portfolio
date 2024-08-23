import { Component } from '@angular/core';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-user-header',
  standalone: true,
  imports: [],
  templateUrl: './dialog-edit-user-header.component.html',
  styleUrl: './dialog-edit-user-header.component.scss'
})
export class DialogEditUserHeaderComponent {

  user: User;


}
