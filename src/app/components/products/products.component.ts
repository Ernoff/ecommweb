import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Products[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getProducts();
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
  _id: number,
  name: string,
  price: number
}