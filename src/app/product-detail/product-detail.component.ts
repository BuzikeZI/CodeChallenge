import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productList: any=[{}];
  product: any=[{
    id:'',
    name:'',
    "priceRange": {
      "selling": {
          "high": 95,
          "low": 9
      }
  },
  "thumbnail": {
      "size": "m",
      "meta": "",
      "alt": "",
      "rel": "thumbnail",
      "width": 363,
      "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201847/0012/organic-luxe-fibrosoft-towels-white-m.jpg",
      "height": 363
  },
  "hero": {
      "size": "m",
      "meta": "",
      "alt": "",
      "rel": "hero",
      "width": 363,
      "href": "",
      "height": 363
  },
  "images": [
      {
          "size": "m",
          "meta": "",
          "alt": "",
          "rel": "althero",
          "width": 363,
          "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-white-1-m.jpg",
          "height": 363
      },
      {
          "size": "m",
          "meta": "",
          "alt": "",
          "rel": "althero",
          "width": 363,
          "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-midnight-m.jpg",
          "height": 363
      },
      {
          "size": "m",
          "meta": "",
          "alt": "",
          "rel": "althero",
          "width": 363,
          "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-white-m.jpg",
          "height": 363
      }
  ],
  "swatches": [],
  "messages": [
      "Up to 25% off plus Free Shipping",
      "on orders $29+ with code WINWIN"
  ],
  "flags": [
      {
          "bopisSuppress": false,
          "rank": 3,
          "id": "newcore"
      },
      {
          "bopisSuppress": false,
          "rank": 5,
          "id": "mono"
      },
      {
          "bopisSuppress": false,
          "rank": 7,
          "id": "organic"
      }
  ],
  "reviews": {
      "recommendationCount": 0,
      "likelihood": 0,
      "reviewCount": 0,
      "averageRating": 0,
      "id": "organic-luxe-fibrosoft-towels-white-b2650",
      "type": "GROUP_REVIEWS"
  }}];
  name: string;
  constructor(private route: ActivatedRoute,
    private productsListService: ProductsListService,
    private location: Location) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct():void{
    const pid = this.route.snapshot.paramMap.get('id');
    console.log("test  " + pid);
    this.productsListService.getProductsList().subscribe(data=>this.product=(data['groups']).filter((p)=>{if(p.id==pid)return p}));

  }
}
