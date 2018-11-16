import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherFormComponent } from './components/father-form/father-form.component';
import { ChildrenFormComponent } from './components/children-form/children-form.component';
import { FamilyComponent } from './components/family/family.component';
import { FamilySearcherComponent } from './components/family-searcher/family-searcher.component';
import { FathersService } from './shared/services/fathers.service';
import { ChildrenService } from './shared/services/children.service';
import { FamiliesService } from './shared/services/families.service';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    FatherFormComponent,
    ChildrenFormComponent,
    FamilyComponent,
    FamilySearcherComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FathersService, ChildrenService, FamiliesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
