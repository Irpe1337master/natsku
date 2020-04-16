import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-activity',
  templateUrl: './cat-activity.component.html',
  styleUrls: ['./cat-activity.component.css']
})
export class CatActivityComponent implements OnInit {

  oldActivity:any;
  activity = {
    time: null,
    date: null,
    cat_id: null
  };
  cat = {};
  chartData = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCat(this.route.snapshot.params['id']);
    this.getActivity();
  }

  getCat(id) {
    this.http.get('http://localhost:8080/cat/'+id).subscribe(data => {
      this.cat = data;
    });
  }

  getActivity() {
    this.http.get('http://localhost:8080/activity/').subscribe(data => {
      this.oldActivity = data;
      this.chartActivity();
    });
  }

  chartActivity() {
    for(let i=0; i<=23; i++) {
      this.chartData.push(0);
    }

    for (let slide in this.oldActivity) {
      if (this.oldActivity[slide].cat_id == this.route.snapshot.params['id']) {
        this.chartData[this.oldActivity[slide].time] = 1;
      }
    }
    console.log(this.chartData);
  }

  saveActivity(id) {
    console.log('old activity');
    console.log(this.oldActivity);

    console.log('new Activity');
    this.activity.time = this.activity.time.hour;
    this.activity.date = this.activity.date.day+'-'+this.activity.date.month+'-'+this.activity.date.year;
    this.activity.cat_id = this.cat.id;
    console.log(this.activity);
    this.http.post('http://localhost:8080/activity/', this.activity)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/cat-activity'+this.cat.id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
