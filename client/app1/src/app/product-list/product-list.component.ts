import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products=[];
  constructor(private service :ProductServiceService) {
    this.getp();
   }

  ngOnInit() {
  }

getp()
{
  this.service.get().subscribe(response=>{
    const body =response.json();
    this.products=body.data;
  })
}
deleteProduct(item)
{
  
  this.service.delete(item.Id).subscribe(response=>{
    const body =response.json();
    console.log(body);
  
    
    this.getp();
})
}

}
