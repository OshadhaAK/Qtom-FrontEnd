import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.css']
})
export class ProductsServicesComponent implements OnInit {

  departments = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/Products&Services', department.id]);
  }
}
