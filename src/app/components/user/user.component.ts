import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    model: any={};
    constructor(private dataService:DataService) {
        console.log('constructor ran ...')
    }
    ngOnInit() {
  
    }
     login(){
        return this.dataService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log(data)
                    // this.router.navigate([this.returnUrl])
                },
                error => {
                    console.log(error)
                }
            )
        //  console.log('logging in');
        //  console.log(this.model.username, this.model.password)
  //   this.http.post('www.google.com', body)
  //     .map(res => res.json());
  }
}