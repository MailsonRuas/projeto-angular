import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Ex1Component} from './ex1/ex1.component';
import {Ex2Component} from './ex2/ex2.component';
import {Ex3Component} from './ex3/ex3.component';

const routes: Routes=[
	{
		path: 'ex1',
		component: Ex1Component
	},
	{
		path: 'ex2',
		component: Ex2Component
	},
	{
		path: 'ex3',
		component: Ex3Component
	},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
