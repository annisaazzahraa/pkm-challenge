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
      id:"1",
      name : "Jibrail",
      class : "IF22A",
      nim : "22416255201274"
    },
    {
      id:"2",
      name : "Bayu",
      class : "IF22A",
      nim : "22416255201284"
    },
    {
      id:"3",
      name : "Alfian",
      class : "IF22A",
      nim : "22416255201213"
    }
  ]


  // Ini variabel untuk menambah data
  dataWillSubmitted = {
    id:"",
    name:"",
    class:"",
    nim:""
  }


  //Kerjakan!!!
  // Silahkan lengkapi fungsi submitData!
  submitData(){
   
  }

  //Kerjakan!!!
  // Silahkan lengkapi fungsi onDelete!
  onDelete(id:string){
    
  }

  //Ini code untuk menampilkan form edit. Jika form edit tidak ingin diubah abaikan code ini, jika ingin diubah misalnya menggunakan modal, silahkan manfaatkan code ini 
  isEditedMode = false
  openEditForm(){
    this.isEditedMode = true
  }


  // Ini Variabel untuk Edit data
  // Manfaatkan variabel ini untuk proses edit data
  name = ""
  nim = ""
  class = ""


  //Kerjakan!!!
  // Silahkan lengkapi fungsi editData!
  editData(id:string){
    
    this.isEditedMode = !this.isEditedMode
  }

}
