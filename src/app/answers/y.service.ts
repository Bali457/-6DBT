import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './Answer';


@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private ac:HttpClient) { }

  f2():Observable<any>
  {
    let x ="http://localhost:9900/selallans";
    return this.ac.get(x);
  }

  f3(i:any):Observable<any> {
    let x ="http://localhost:9900/selans?y="+i;
    return this.ac.get(x);


   }
   
   f4(i:Answer):Observable<any> {
    let x ="http://localhost:9900/updans";
    return this.ac.post(x,i);


   }
  
}
