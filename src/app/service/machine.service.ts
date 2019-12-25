import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

    private serverURL = 'http://localhost:9000/cloud/machine';

    private asnycServerURL = 'http://localhost:9000/cloud/machine/async';

    constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

    start(machineId) {
        return this.http.put<any>(`${this.asnycServerURL}/start/existingId=${machineId}`, {});
    }

    stop(machineId) {
        return this.http.put<any>(`${this.asnycServerURL}/stop/existingId=${machineId}`, {});
    }

    restart(machineId) {
        return this.http.put<any>(`${this.asnycServerURL}/restart/existingId=${machineId}`, {});
    }

    delete(machineId) {
        return this.http.delete<any>(`${this.serverURL}/delete/existingId=${machineId}`, {});
    }

    save(machineRequest) {
        return this.http.post<any>(`${this.serverURL}/save/ownerId=${this.getOwnerId()}`, machineRequest);
    }

    findAllByOwner() {
        return this.http.put<any>(`${this.serverURL}/allByOwner`, {ownerId: this.getOwnerId()});
    }

    findAllByOwnerAndName(name) {
        return this.http.put<any>(`${this.serverURL}/allByOwnerAndName`, {ownerId: this.getOwnerId(), name});
    }

    findAllByOwnerAndStatusIn(statuses) {
        return this.http.put<any>(`${this.serverURL}/allByOwnerAndStatusIn`, {ownerId: this.getOwnerId(), statuses});
    }

    findAllByOwnerAndBetweenDate(date) {
        return this.http.put<any>(`${this.serverURL}/allByOwnerAndBetweenDate`, {ownerId: this.getOwnerId(), date});
    }

    private getOwnerId() {
        return this.userService.decodeToken().id;
    }

}
