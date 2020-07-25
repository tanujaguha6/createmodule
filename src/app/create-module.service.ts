import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateModuleService {

  constructor(private http: HttpClient) { }
  create_module(obj){
    return this.http.post('http://localhost:3080/api/create-module', obj);
  }
}
