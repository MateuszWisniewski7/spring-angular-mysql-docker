import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Child } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  private url: string  = 'http://localhost:8080/children/';

  constructor(private http: HttpClient) { }

  searchChild(child: Child){
  let params = new HttpParams()
  .set('firstName', child.firstName)
  .set('lastName', child.lastName)
  .set('pesel', child.pesel)
  .set('birthDate', child.birthDate)
  .set('sex', child.sex);
  return this.http.get(this.url+'searchChild',{params});
  }

  addChild(child: Child){
    return this.http.post(this.url+'addChildToFamily',child);
  }
}
