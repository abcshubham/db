import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
Title='';
Descrption='';
Price=0;
Rating=0;

  constructor(private service:ProductServiceService) { }

  ngOnInit() {}
  addProduct()
  {
     this.service.post(this.Title,this. Descrption,this.Price,this.Rating).subscribe(response=>
      {
        const body = response.json();
        console.log(body);
        if (body['status'] == 'success') {
          alert('successfully added product');
        } else {
          alert('error while adding product');
        }
      })
  }

}

