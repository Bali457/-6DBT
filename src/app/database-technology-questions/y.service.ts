import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private httpClient:HttpClient) { }

  // f2():Observable<any>
  // {
  //   let x ="http://localhost:9900/ms";
  //   return this.ac.get(x);
  // }

  enterQues(i:Question):Observable<any> {
    let x ="http://localhost:9900/enterques";
    return this.httpClient.post(x,i);


   }

   fetchQues(i:any):Observable<any> {
    let x ="http://localhost:9900/getques?mid="+i;
    return this.httpClient.get(x);


   }

  
}
