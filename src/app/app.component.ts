import { Component, OnInit } from '@angular/core';
import { FoodDataService } from './services/food-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spoonacular';
  recipes : any
  ishidden = true;
  ishide =true;
  constructor(private foodService: FoodDataService){

  }
  ngOnInit(): void {
    
  }
  searchRecipe(val:string){
    this.title = val;
    this.ishidden = false;
   this.foodService.searchData(val).subscribe(res=>{
    this.recipes = res.results;
   })
  }
  getInfo(){
    this.ishide =false;
  }
}
