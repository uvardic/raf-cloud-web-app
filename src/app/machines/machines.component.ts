import {Component, OnInit} from '@angular/core';
import {MachineService} from '../service/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

    machines = [];

    searchContent = '';

    machineCreateRequest = {
        name: null
    };

    constructor(private machineService: MachineService) {}

    ngOnInit(): void {
        this.findByOwner();
    }

    search() {
        if (this.isSearchContentDate()) {
            this.findByOwnerAndDateBetween();
        } else if (this.isSearchContentStatuses()) {
            this.findByOwnerAndStatusIn();
        } else if (this.searchContent) {
            this.findByOwnerAndName();
        } else {
            this.findByOwner();
        }
    }

    private findByOwner() {
        this.machineService.findAllByOwner()
            .subscribe(
                response => this.machines = response.slice(0),
                error => console.error(error.error.message)
            );
    }

    private findByOwnerAndName() {
        this.machineService.findAllByOwnerAndName(this.searchContent)
            .subscribe(
                response => this.machines = response.slice(0),
                error => console.error(error.error.message)
            );
    }

    private findByOwnerAndStatusIn() {
        this.machineService.findAllByOwnerAndStatusIn(this.searchContent.split(','))
            .subscribe(
                response => this.machines = response.slice(0),
                error => console.error(error.error.message)
            );
    }

    private findByOwnerAndDateBetween() {
        console.log('Date search');

        this.machineService.findAllByOwnerAndBetweenDate(this.searchContent)
            .subscribe(
                response => this.machines = response.slice(0),
                error => console.error(error.error.message)
            );
    }

    private isSearchContentDate() {
        const dateArray = this.searchContent.split('/');

        if (dateArray.length !== 3) {
            return false;
        }
        if (Number(dateArray[0]) > 31 || Number(dateArray[0]) < 1) {
            return false;
        }
        if (Number(dateArray[1]) > 12 || Number(dateArray[1]) < 1) {
            return false;
        }

        return dateArray[2].length === 4 && !isNaN(Number(dateArray[2]));
    }

    private isSearchContentStatuses() {
        return this.searchContent.includes('RUNNING') || this.searchContent.includes('STOPPED');
    }

    create() {
        this.machineService.save(this.machineCreateRequest)
            .subscribe(
                response => {
                    console.log(response);
                    this.findByOwner();
                },
                error => console.error(error.error.message)
            );
    }

    start(machineId) {
        this.machineService.start(machineId).subscribe();
    }

    stop(machineId) {
        this.machineService.stop(machineId).subscribe();
    }

    restart(machineId) {
        this.machineService.restart(machineId).subscribe();
    }

    destroy(machineId) {
        this.machineService.delete(machineId).subscribe(
            response => {
                console.log(response);
                this.findByOwner();
            },
            error => console.error(error.error.message)
        );
    }

}
