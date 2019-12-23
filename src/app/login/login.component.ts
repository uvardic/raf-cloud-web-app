import {Component} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

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

    constructor(private userService: UserService, private router: Router) {}

    loginUser() {
         this.userService.login(this.loginRequest)
            .subscribe(
                response => {
                    localStorage.setItem('token', response.token);
                    this.router.navigate(['/machines']);
                },
                error => console.log(error)
            );
    }

}
