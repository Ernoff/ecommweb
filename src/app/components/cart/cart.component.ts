import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userDetails: any={};
  cartDetails: CartDetails[];

  constructor(
    private dataService:DataService,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.userDetails  = this.route.snapshot.params['user'];
    this.fetchCart();
  }

  fetchCart(){
    this.dataService.fetchCart(this.userDetails)
    .subscribe(
      data => {
          this.cartDetails = data.data.map((prod)=> { return prod.products} )
        // this.cartDetails = [];
        // for(var i=0;i<data.length;i++){
        //       console.log(data[i].products)
        //     this.cartDetails.push(data[i].products);
          //  return  console.log(this.cartDetails);
        // }
        console.log(this.cartDetails)
        console.log(this.cartDetails[0][0].name)
        // return this.cartDetails = data.data.products;
      },
      error => {
        return console.log(error)
      }
    )
  }

}
interface CartDetails {
  _id: string,
  name: string,
  price: number
}