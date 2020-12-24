import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "https://assignment-machstatz.herokuapp.com/planet";
    return this.http.get(url);
  }
}
