import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Family } from '../classes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamiliesService {

  private familySource = new BehaviorSubject(new Family());
  currentFamily = this.familySource.asObservable();
  
  private url: string = 'http://localhost:8080/families/';

  constructor(private http: HttpClient) { }

  createFamily() {
    return this.http.post(this.url + 'createFamily', null);
  }

  readFamily(familyId: number) {
    let params = new HttpParams()
      .set('familyId', familyId.toLocaleString());
    return this.http.get(this.url + 'readFamily', { params });
  }

  updateFamily(family: Family) {
    this.familySource.next(family);
  }

}
