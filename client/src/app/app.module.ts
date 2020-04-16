import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from "./index/index.component";
//import {NavComponent} from "./nav/nav.component";
//import {NavService} from "./nav/nav.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { CatComponent } from './cat/cat.component';
import { CatCreateComponent } from './cat-create/cat-create.component';

import { FormsModule }   from '@angular/forms';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatActivityComponent } from './cat-activity/cat-activity.component';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LineChartComponent } from './line-chart/line-chart.component';

import { ChartsModule } from 'ng2-charts';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    //NavComponent,
    CatComponent,
    CatCreateComponent,
    CatDetailComponent,
    CatEditComponent,
    CatActivityComponent,
    CarouselComponent,
    LineChartComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
