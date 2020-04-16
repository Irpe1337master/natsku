import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import { CatComponent } from "./cat/cat.component";
import { CatCreateComponent } from "./cat-create/cat-create.component";
import { CatDetailComponent } from "./cat-detail/cat-detail.component";
import { CatEditComponent } from "./cat-edit/cat-edit.component";
import { CatActivityComponent } from './cat-activity/cat-activity.component';

const routes: Routes = [
  {
    path: 'cat',
    component: CatComponent,
    data: { title: 'Cat List' }
  },
  {
  path: 'cat-create',
  component: CatCreateComponent,
  data: { title: 'Add Cat' }
  },
  {
  path: 'cat-edit/:id',
  component: CatEditComponent,
  data: { title: 'Edit Cat' }
  },
  {
  path: 'cat-activity/:id',
  component: CatActivityComponent,
  data: { title: 'Cat Activity' }
  },
  {
  path: 'cat-detail/:id',
  component: CatDetailComponent,
  data: { title: 'Cat Detail' }
  },
  { path: '',
    redirectTo: '/cat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
