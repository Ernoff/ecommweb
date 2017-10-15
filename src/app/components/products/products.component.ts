import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Products[];
  cartqty: string;
  userDetails: any={};
  constructor(
    private dataService:DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProducts();
    this.userDetails = this.route.snapshot.params['user'];
    this.cartSize();
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
  cartSize(){
    this.dataService.cartSize(this.userDetails)
      .subscribe(
        data => {
          return this.cartqty = data.length;
        },
        error => {
          console.log(error)
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
  // toCart(){
  //   return this.router.navigate(['cart']);
  // }
  logOut(){
    return this.router.navigate(['']);
    
  }

  //end of class
}

interface Products {
  _id: string,
  name: string,
  price: number
}