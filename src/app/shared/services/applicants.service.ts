import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  private appllicants = [
    {
      id: 0,
      fname: "Youssef",
      lname: "Sameh",
      imagePath: "../../../assets/img/team/emp.jpg",
      position: ".net-developer",
      status: null,
      appointment: {
        date: null,
        time: null
      }
    },
    {
      id: 1,
      fname: "Sara",
      lname: "Adel",
      imagePath: "../../../assets/img/team/emp6.jpg",
      position: "Full-stack-developer",
      status: true,
      appointment: {
        date: null,
        time: null
      }
    },
    {
      id: 2,
      fname: "Bola",
      lname: "Hany",
      imagePath: "../../../assets/img/team/emp4.jpg",
      position: "front-end-developer",
      status: false,
      appointment: {
        date: null,
        time: null
      }
    },
    {
      id: 3,
      fname: "Ann",
      lname: "Amgad",
      imagePath: "../../../assets/img/team/emp5.jpg",
      position: ". net-developer",
      status: null,
      appointment: {
        date: null,
        time: null
      }
    },
    {
      id: 4,
      fname: "Ahmed",
      lname: "Ayman",
      imagePath: "../../../assets/img/team/emp3.jpg",
      position: "Full-Stack-developer",
      status: null,
      appointment: {
        date: null,
        time: null
      }
    },
    {
      id: 5,
      fname: "Rana",
      lname: "Osama",
      imagePath: "../../../assets/img/team/emp7.jpg",
      position: "front-end-developer",
      status: true,
      appointment: {
        date: null,
        time: null
      }
    },
    {
      id: 6,
      fname: "Youssef",
      lname: "Sameh",
      imagePath: "../../../assets/img/team/emp.jpg",
      position: ".net-developer",
      status: true,
      appointment: {
        date: null,
        time: null
      }
    },{
      id: 7,
      fname: "Jhon",
      lname: "Doe",
      imagePath: "../../../assets/img/team/emp.jpg",
      position: ".net-developer",
      status: null,
      appointment: {
        date: null,
        time: null
      }
    },{
      id: 8,
      fname: "Youssef",
      lname: "Sameh",
      imagePath: "../../../assets/img/team/emp.jpg",
      position: ".net-developer",
      status: false,
      appointment: {
        date: null,
        time: null
      }
    }
  ]
  
  constructor() { }

  public getAll() {
   return this.appllicants;
  }
  // public add() {
  // }
  public update(id:number,status:boolean) {
    this.appllicants[id].status = status;
    //console.log(this.appllicants[id].status);
  }
  public getById(id: number) {
    for (let i = 0; i < this.appllicants.length; i++) {
      if (this.appllicants[i].id === id) {
        return this.appllicants[i];
      }
    }
  }

  public delete(id: number) {
    //console.log("i delete user");
    this.appllicants[id].status = false;
    //console.log(this.appllicants[id]);
  }
  
  
}
