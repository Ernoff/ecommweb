import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    model: any={};
    constructor(private dataService:DataService, private router:Router) {
        console.log('constructor ran ...')
    }
    ngOnInit() {
  
    }
    login(){
    return this.dataService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                // console.log(data.user);
                return this.router.navigate(['products', {user: data.user}]);
            },
            error => {
                console.log(error)
            }
        )
    }
}