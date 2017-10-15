import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class DataService {
  // userDetails: any={};
  // user: any={};
  constructor(private http:Http) { }
  
  login(username:string, password:string){
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});
    var body = JSON.stringify({email:username, password:password, strategy:'local'});
    //make the call
    console.log("from service" + username);
    return this.http.post('http://localhost:3030/authentication', body, options)
      .map((res: Response) => {
      let user =  res.json();
       if(user && user.token){
       localStorage.setItem('currentUser', JSON.stringify(user))}
      
       return user;
      })
      
  }
  cartSize(userId: string){
    console.log(userId);
    const url = `http://localhost:3030/orders/?customer=${userId}`
    return this.http.get(url)
    .map((res: Response) => {
      let data = res.json().data;
      return data;
    })
  }
  logout(){
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    let user = null
    return user;
  }

  getProducts(){
    return this.http.get('http://localhost:3030/products')
    .map((res: Response) => {
      let data = res.json().data;
      return data
    })
  }

  addCart(userId: string, productId:string){
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});
    var body = JSON.stringify({customer:userId, products:productId});
    //make the call
    
    return this.http.post('http://localhost:3030/orders', body, options)
      .map((res: Response) => {
       let data = res.json();
       return data
      })
  }
}
