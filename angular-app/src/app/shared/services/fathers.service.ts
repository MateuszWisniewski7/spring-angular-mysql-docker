import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Father } from '../classes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FathersService {

  private fatherSource = new BehaviorSubject(new Father());
  currentFather = this.fatherSource.asObservable();
  
  private url: string  = 'http://localhost:8080/fathers/';

  constructor(private http: HttpClient) { }


  addFather(father: Father){
  return this.http.post(this.url+'addFatherToFamily',father);
  }

  updateFather(father: Father){
    this.fatherSource.next(father);
  }


}
