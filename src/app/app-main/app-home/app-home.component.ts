import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
  categories =[{
    'name': 'Drama',
  },{
    'name': 'Science Fiction',
  },{
    'name': 'Biography',
  },{
    'name': 'Lifestyle',
  },{
    'name': 'Mystery',
  },{
    'name': 'Poetry',
  },{
    'name': 'Romance',
  },{
    'name': 'Comics',
  },{
    'name': 'Travel',
  },{
    'name': 'Adventure',
  },{
    'name': 'History',
  },{
    'name': 'Art',
  }]
newArray;
  constructor() { }

  ngOnInit() {
   this.newArray = this.categories.reduce(function(categories,item,index) {

      if(index % 3 === 2) {
        categories.right.push(item);
      }
      else if(index % 3 === 1 ){
        categories.middle.push(item);
      }
      else{
        categories.left.push(item);
      }
      return categories;
    },{left:[],middle:[],right:[]});
  }


}
