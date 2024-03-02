import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDataService } from '../services/food-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  steps : any;
  id : any;
  title :any
  image :any
  ingrediants : any
constructor(private route : ActivatedRoute, private service : FoodDataService){

}
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = params['id'];
    this.title = params['title'];
    this.image = params['image'];

  });
  console.log("Activated id",this.id);
    this.service.searchInfo(this.id).subscribe(res=>{
      this.ingrediants =res.extendedIngredients;
      console.log("food info",res.extendedIngredients)
    });
    this.service.getIngrd(this.id).subscribe(res=>{
        console.log('Instruction',res[0].steps)
        this.steps = res[0].steps;
    })
}
}
