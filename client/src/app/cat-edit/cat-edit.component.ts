import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {

  cat = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCat(this.route.snapshot.params['id']);
  }

  getCat(id) {
    this.http.get('http://localhost:8080/cat/'+id).subscribe(data => {
      this.cat = data;
    });
  }

  updateCat(id) {
    this.http.put('http://localhost:8080/cat/'+id, this.cat)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/cat-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
