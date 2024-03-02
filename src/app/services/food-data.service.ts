import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  infoUrl = "https://api.spoonacular.com/recipes"
  apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
  anaLysedUrl = "https://api.spoonacular.com/recipes"
  apKay = 'c94caccaf4b44c7fb151d8f8388bcbde'
  constructor(private http: HttpClient) { }
  searchData(val: any): Observable<any> {
    return this.http.get(`${this.apiUrl}`, { params: { query: val, number: '5', apiKey: this.apKay } })
  }
  searchInfo(id:any) : Observable<any>{
    return this.http.get(`${this.infoUrl}/${id}/information?includeNutrition=false`,{params:{apiKey: this.apKay}})
  }
  getIngrd(id:any) :Observable<any>{
    return this.http.get(`${this.anaLysedUrl}/${id}/analyzedInstructions`,{params:{apiKey: this.apKay}})
  }
}
