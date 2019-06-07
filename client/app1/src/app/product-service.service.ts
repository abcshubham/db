import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class ProductServiceService {
  url='http://172.0.2.143:4444/product';

  constructor(private http:Http) { 
    this.http=http;
  }

  get()
  {
    return this.http.get(this.url);
  }
  delete(Id:number)
  {
    return this.http.delete(this.url +'/'+ Id);
  }
  
  post(Title:string,Descrption:string,Price:number,Rating:number)
  {
const body={
  Title:Title,
  Descrption:Descrption,
  Price:Price,
  Rating:Rating
};
const headers = new Headers({'Content-Type':'application/json'});
const requestOptions=new RequestOptions({headers:headers});
return this.http.post(this.url,body,requestOptions);
  }
}
