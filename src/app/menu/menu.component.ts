import {Component} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    constructor(private userService: UserService) {
    }

}
