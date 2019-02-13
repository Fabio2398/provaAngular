import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers'},
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } //se nel path dell'url non trova nulla, reindirizza automaticamente a /customers,
                                                              //arrivando al file customers-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
