import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  product =[
    {type: 'Pizza', name: 'Vege Pizza', price: '16.00', imagePath: '../../../assets/images/product1.jpg', id: 1},
    {type: 'Ginger', name: 'Ginger Tea', price: '24.00', imagePath: '../../../assets/images/product2.jpg', id: 2},
    {type: 'Pizza', name: 'Fresh Salad', price: '12.00', imagePath: '../../../assets/images/product3.jpg', id: 3},
    {type: 'Ginger', name: 'Healthy Herbal Tea', price: '8.00', imagePath: '../../../assets/images/product4.jpg', id: 4},
    {type: 'Drink', name: 'Fresh Salad', price: '12.50', imagePath: '../../../assets/images/product5.jpg', id: 5},
    {type: 'Hamburger', name: 'Spicy Hamburger', price: '7.50', imagePath: '../../../assets/images/product6.jpg', id: 6},
    {type: 'Drink', name: 'Chocolate Cake', price: '16.00', imagePath: '../../../assets/images/product7.jpg', id: 7},

  ];

  GetAllProducts(){
    return this.product;
  }
  GetProductDetailsById(id: number){
    return this.product.filter(a=>a.id==id);
  }

}
