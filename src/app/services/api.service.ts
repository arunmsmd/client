import {Injectable} from '@angular/core';
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8080/';

  constructor(private _http: HttpClient) {
  }

  getTypeRequest(url:any) {
    return this._http.get(this.baseUrl+url).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url:any, payload:any) {
    var x = this.baseUrl + url
    console.log(x)
    return this._http.post('http://localhost:8080/user/login', payload).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url:any, payload:any) {
    return this._http.put(this.baseUrl+url, payload).pipe(map(res => {
      return res;
    }));
  }

}
