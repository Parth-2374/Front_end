import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './service/user';
import { Product } from './service/products/product';
import { Products } from './interfaces/product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // list:any
  // constructor(private productService:Product){}
  // ngOnInit(){
  //   this.productService.getapi().subscribe((data:any)=>{
  //     console.log(data.products);
  //      this.list=data.products
  //   })
  // }
  // API user
  // user1: any
  // constructor(private userlist: User) { }
  // ngOnInit() {
  //   this.userlist.getuser().subscribe((data:any)=>{
  //     console.log(data);
  //     this.user1=data
  //   })
  // }
  //Product
  product:Products[]=[];
  constructor(private productList:Product){}
  ngOnInit(){
    this.productList.getProduct().subscribe((data:Products[])=>{
      console.log(data);
      this.product=data
      
    })

  }
  addProduct(product: Products) {
   this.productList.saveProduct(product).subscribe((data:Products)=>{
    console.log(data);
    
    
   })

  }
}
