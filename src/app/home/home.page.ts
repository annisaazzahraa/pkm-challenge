import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  classData = [
    "IF22A",
    "IF22B",
    "IF22C",
    "IF22D",
    "IF22E",
    "IF22F",
    "IF22G"
  ]

  personData = [
    {
      name : "Jibrail",
      class : "IF22A",
      nim : "22416255201274"
    },
    {
      name : "Bayu",
      class : "IF22A",
      nim : "22416255201284"
    },
    {
      name : "Alfian",
      class : "IF22A",
      nim : "22416255201213"
    }
  ]


  name ="";
  class = "";
  nim = "";


  submitData(){

  }

}
