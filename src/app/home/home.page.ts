// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() { }

//   classData = [
//     "IF22A",
//     "IF22B",
//     "IF22C",
//     "IF22D",
//     "IF22E",
//     "IF22F",
//     "IF22G"
//   ];

//   personData = [
//     {
//       id: "1",
//       name: "Jibrail",
//       class: "IF22A",
//       nim: "22416255201274"
//     },
//     {
//       id: "2",
//       name: "Bayu",
//       class: "IF22A",
//       nim: "22416255201284"
//     },
//     {
//       id: "3",
//       name: "Alfian",
//       class: "IF22A",
//       nim: "22416255201213"
//     }
//   ];

//   dataWillSubmitted = {
//     id: "",
//     name: "",
//     class: "",
//     nim: ""
//   };

//   // Variabel untuk Edit Data
//   editDataForm = {
//     id: "",
//     name: "",
//     nim: "",
//     class: ""
//   };

//   isEditedMode = false;

//   // Fungsi submitData untuk menambahkan data baru
//   submitData() {
//     console.log(this.dataWillSubmitted)
//     this.dataWillSubmmited.id.push(count)

//     // Menghitung jumlah objek dengan class "IF22A"
//     const count = this.personData.length;
//     console.log(count); // Output: 3


//     if (this.dataWillSubmitted.id && this.dataWillSubmitted.name && this.dataWillSubmitted.class && this.dataWillSubmitted.nim) {
//       // Menambahkan data baru ke personData
//       const newData = { ...this.dataWillSubmitted };
//       this.personData.push(newData);
//       // Reset form setelah submit
//       this.dataWillSubmitted = { id: "", name: "", class: "", nim: "" };
//       console.log("Data berhasil ditambahkan:", this.personData);
//     } else {
//       console.error("Semua field harus diisi!");
//     }
//   }

//   // Fungsi untuk menghapus data
//   onDelete(id: string) {
//     this.personData = this.personData.filter(person => person.id !== id);
//     console.log("Data berhasil dihapus:", this.personData);
//   }

//   // Fungsi untuk membuka form edit
//   openEditForm(id: string) {
//     const personToEdit = this.personData.find(person => person.id === id);
//     if (personToEdit) {
//       this.isEditedMode = true;
//       this.editDataForm = { ...personToEdit };
//     }
//   }

//   // Fungsi untuk mengedit data
//   editData(id: string) {
//     const index = this.personData.findIndex(person => person.id === id);
//     if (index !== -1) {
//       this.personData[index] = { ...this.editDataForm };
//       console.log("Data berhasil diupdate:", this.personData);
//     }
//     this.isEditedMode = false;
//     this.editDataForm = { id: "", name: "", nim: "", class: "" };
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  classData = [
    "IF22A",
    "IF22B",
    "IF22C",
    "IF22D",
    "IF22E",
    "IF22F",
    "IF22G"
  ];

  personData = [
    {
      id: "1",
      name: "Jibrail",
      class: "IF22A",
      nim: "22416255201274"
    },
    {
      id: "2",
      name: "Bayu",
      class: "IF22A",
      nim: "22416255201284"
    },
    {
      id: "3",
      name: "Alfian",
      class: "IF22B",
      nim: "22416255201213"
    }
  ];

  dataWillSubmitted = {
    id: "",
    name: "",
    class: "",
    nim: ""
  };

  // Variabel untuk Edit Data
  editDataForm = {
    id: "",
    name: "",
    nim: "",
    class: ""
  };

  currentEditId: string | null = null;

  isEditedMode = false;

  // Fungsi submitData untuk menambahkan data baru
  submitData() {
    // Menghitung jumlah objek dalam personData
    const count = this.personData.length + 1;
    console.log(count); // Output: 3

    // Perbaiki penulisan menjadi 'dataWillSubmitted'
    this.dataWillSubmitted.id = count.toString(); // Menambahkan count ke id

    console.log(this.dataWillSubmitted);

    if (this.dataWillSubmitted.id && this.dataWillSubmitted.name && this.dataWillSubmitted.class && this.dataWillSubmitted.nim) {
      // Menambahkan data baru ke personData
      const newData = { ...this.dataWillSubmitted };
      this.personData.push(newData);
      // Reset form setelah submit
      this.dataWillSubmitted = { id: "", name: "", class: "", nim: "" };
      console.log("Data berhasil ditambahkan:", this.personData);
    } else {
      console.error("Semua field harus diisi!");
    }
  }

  // Fungsi untuk menghapus data
  onDelete(id: string) {
    this.personData = this.personData.filter(person => person.id !== id);
    console.log("Data berhasil dihapus:", this.personData);
  }

  // Fungsi untuk membuka form edit
  openEditForm(id: string) {
    const personToEdit = this.personData.find(person => person.id === id);
    if (personToEdit) {
      this.currentEditId = id;
      this.editDataForm = { ...personToEdit };
    }
  }

  // Fungsi untuk menutup form edit
  closeEditForm() {
    this.currentEditId = null;
    this.editDataForm = { id: "", name: "", nim: "", class: "" };
  }


  // Fungsi untuk mengedit data
  editData(id: string) {
    const index = this.personData.findIndex(person => person.id === id);
    if (index !== -1) {
      this.personData[index] = { ...this.editDataForm };
      console.log("Data berhasil diupdate:", this.personData);
    }
    this.closeEditForm();
  }
}
