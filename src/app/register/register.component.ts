import {Component} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    registerRequest = {
        username: '',
        password: '',
        firstName: null,
        lastName: null,
        role: 'USER'
    };

    constructor(private userService: UserService, private router: Router) {}

    registerUser() {
        if (this.registerRequest.firstName === '') {
            this.registerRequest.firstName = null;
        }

        if (this.registerRequest.lastName === '') {
            this.registerRequest.lastName = null;
        }

        this.userService.register(this.registerRequest)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/login']);
                },
                error => console.error(error.error.message)
            );
    }

}
