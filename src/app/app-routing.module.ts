import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formDriven',
    component: TemplateDrivenComponent
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent
  },
  {
    path: 'no-page',
    component: NoPageComponent
  },

  { path: '**', redirectTo: 'no-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
