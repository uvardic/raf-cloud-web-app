import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    registerUser(registerUserRequest) {
        return this.http.post<any>('http://localhost:9000/cloud/user/save', registerUserRequest);
    }
}
