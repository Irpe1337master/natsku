import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-create',
  templateUrl: './cat-create.component.html',
  styleUrls: ['./cat-create.component.css']
})
export class CatCreateComponent implements OnInit {

  cat = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveCat() {
    this.cat['animal'] = { id: 1 };

    this.http.post('http://localhost:8080/cat', this.cat)
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/cat-detail/', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
