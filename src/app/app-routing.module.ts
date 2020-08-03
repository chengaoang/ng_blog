import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router } from "@angular/router";
import { ArticleMainComponent } from "./article-main/article-main.component";

const routes: Routes=[
  {path:'article',component:ArticleMainComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
