import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor() {
}

  shadow(){
      console.log('message');
  }




  ngOnInit(): void {
  }

}


var sc = new SolutionsComponent;

sc.shadow()
