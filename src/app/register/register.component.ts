import {Component} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    registerRequest = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 'USER'
    };

    constructor(private userService: UserService) {}

    registerUser() {
        this.userService.register(this.registerRequest)
            .subscribe(
                response => console.log(response),
                error => console.log(error)
            );
    }

}
