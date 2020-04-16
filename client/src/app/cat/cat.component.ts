import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat.model'

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  cats:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/cat').subscribe(data => {
      this.cats = data;
    });
  }

}
