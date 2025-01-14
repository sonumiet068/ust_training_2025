import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = "Sonu's Shopping app";
  productList: string[] = [
    'Shoes',
    'Tshirt',
    'Cold-Drinks',
    'Head-Phones',
    'Mobile',
  ];
  productDetails = {
    pId: 101,
    pName: 'Pepsi',
    pcategory: 'Cold-Drink',
    pPrice: 50,
    pIsInStock: false,
    pImage: './images/pepsi.jpeg',
  };
  products = [
    {
      pId: 101,
      pName: 'Pepsi',
      pcategory: 'Cold-Drink',
      pPrice: 50,
      pIsInStock: false,
      pImage: './images/pepsi.jpeg',
    },
    {
      pId: 102,
      pName: 'Nike',
      pcategory: 'Sports',
      pPrice: 50,
      pIsInStock: false,
      pImage: './images/nike.jpeg',
    },
    {
      pId: 103,
      pName: 'Iphone',
      pcategory: 'Electornics',
      pPrice: 100000,
      pIsInStock: false,
      pImage: './images/iphone.jpeg',
    },
    {
      pId: 104,
      pName: 'Android',
      pcategory: 'Electornics',
      pPrice: 35000,
      pIsInStock: false,
      pImage: './images/androidPhones.jpeg',
    },
  ];
}
