import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  cat = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getCatDetail(this.route.snapshot.params['id']);
  }

  getCatDetail(id) {
    this.http.get('http://localhost:8080/cat/'+id).subscribe(data => {
      this.cat = data;
    });
  }

  deleteCat(id) {
    this.http.delete('http://localhost:8080/cat/'+id)
      .subscribe(res => {
          this.router.navigate(['/cat']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
