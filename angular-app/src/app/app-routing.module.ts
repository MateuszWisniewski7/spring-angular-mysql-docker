import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './components/family/family.component';
import { FamilySearcherComponent } from './components/family-searcher/family-searcher.component';
import { FatherFormComponent } from './components/father-form/father-form.component';
import { ChildrenFormComponent } from './components/children-form/children-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
   {
  path: 'home',
  component: HomeComponent
  },
  {
   path: 'addChildren',
   component: ChildrenFormComponent
  },
  {
  path: 'addFather',
  component: FatherFormComponent
  },
  {
  path: 'family',
  component: FamilyComponent
  },
  {
  path: 'findFamily',
  component: FamilySearcherComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
