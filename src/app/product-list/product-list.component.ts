import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:object;

  constructor(private service : ProductsListService) { }

  ngOnInit() {
    this.service.getProductsList().subscribe(data=>{this.products = data['groups'];});
  }

}
