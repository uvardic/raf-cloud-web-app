import {Component} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginRequest = {
        username: '',
        password: ''
    };

    constructor(private userService: UserService) {}

    loginUser() {
        this.userService.login(this.loginRequest)
            .subscribe(
                response => console.log(response),
                error => console.log(error)
            );
    }

}
