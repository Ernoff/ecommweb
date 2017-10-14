import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class DataService {
  // userDetails: any={};
  constructor(private http:Http) { }
  
  login(username:string, password:string){
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});
    var body = JSON.stringify({email:username, password:password, strategy:'local'});
    //make the call
    console.log("from service" + username);
    return this.http.post('http://localhost:3030/authentication', body, options)
      .map((res: Response) => {
        // console.log(res);
        //login succesful if there is a jwt token in the response
       let user =  res.json();
       if(user && user.token){
       //store user details and jwt token in local storage to keep user loggin in between page refreshes
       localStorage.setItem('currentUser', JSON.stringify(user))}
      //  console.log(user);
      // this.userDetails = user;
      // console.log(this.userDetails)
       return user;
      })
      
  }

  logout(){
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  getProducts(){
    return this.http.get('http://localhost:3030/products')
    .map((res: Response) => {
      console.log(res.json());
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
