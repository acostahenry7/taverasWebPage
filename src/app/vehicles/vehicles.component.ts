import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor() { }

   dtOptions: DataTables.Settings = {};
   states: any[] =[];
   form: any;

   data: any[] = [];
   months: number = 0;


  ngOnInit(): void {
    console.log(document.getElementById("v_month_select"))

    for(let i=1; i<6; i++){
        this.data.push([i , "233" , "233", "233"])
    }

    this.dtOptions = {
      "columns": [
        { "title": "Mes" },
         { "title": "Cuota" },
         { "title": "Balance" },
         { "title": "Intereses" }

    ],
     pagingType: 'full_numbers',
     data: this.data
   };

   this.states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];



  }

}
