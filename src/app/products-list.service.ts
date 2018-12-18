import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const PRODUCT_URL:string = "services/catalog/v4/category/shop/new/all-new/index.json";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ProductsListService {
  productDetail:any=[{
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
  
  constructor(private http: HttpClient) { 
  
  }
  
  getProductsList(){
    return this.http.get(PRODUCT_URL);
  }

  getProductDetail(index){
    this.http.get(PRODUCT_URL,httpOptions).subscribe(data=>this.productDetail=(data['groups']));

    return this.productDetail
  }
}
