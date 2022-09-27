import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) { 

  }
  productDetails: any;

  ngOnInit(): void {
    var id= this.activeRoute.snapshot.paramMap.get('id');
    this.productDetails=this.productService.GetProductDetailsById(Number(id))[0];
    console.log(this.productDetails);
  }

}
