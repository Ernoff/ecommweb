import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Products[];
  userDetails: any={};
  constructor(
    private dataService:DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProducts();
    this.userDetails = this.route.snapshot.params['user'];
    console.log(this.userDetails)
  }
  
  addToCart(product){
    this.dataService.addCart(this.userDetails, product)
      .subscribe(
        data => {
          console.log("added successfully");
         return  console.log(data)
        },
        error => {
          return console.log(error)
        }

      )
  }
  getProducts(){
    this.dataService.getProducts()
      .subscribe(
        data => {
          // console.log(data)
          this.products = data;
          // this.router.navigate([this.returnUrl])
        },
        error => {
            console.log(error)
        }
      )
  }
}

interface Products {
  _id: string,
  name: string,
  price: number
}