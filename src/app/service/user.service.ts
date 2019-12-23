import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private serverURL = 'http://localhost:9000/cloud/user';

    constructor(private http: HttpClient, private router: Router) { }

    register(registerRequest) {
        return this.http.post<any>(`${this.serverURL}/save`, registerRequest);
    }

    login(loginRequest) {
        return this.http.post<any>(`${this.serverURL}/login`, loginRequest);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

}
