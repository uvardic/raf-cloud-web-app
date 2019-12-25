import {Component, OnInit} from '@angular/core';
import {MachineService} from '../service/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

    constructor(private machineService: MachineService) {}

    ngOnInit(): void {
        this.machineService.save({name: 'Masina sa fronta'})
            .subscribe(
                response => console.log(response),
                error => console.error(error.error.message)
            );
    }



}
