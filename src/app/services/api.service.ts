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
  getDataTypeRequest(url:any, payload:any) {
    return this._http.get(this.baseUrl+url + '/' + payload).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url:any, payload:any) {
    var x = this.baseUrl + url
    return this._http.post(x, payload).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url:any, payload:any) {
    return this._http.put(this.baseUrl+url, payload).pipe(map(res => {
      return res;
    }));
  }
  deleteTypeRequest(url:any, payload:any){
    return this._http.delete(this.baseUrl+ url + '/' +payload).pipe(map(res => {
      return res;
    }));
  }
}
