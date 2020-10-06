import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css']
})
export class Student1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  student:any[]=[
   {Id:1,Name:"Nishitha",Age:29},
   {Id:2,Name:"Nani",Age:19},
   {Id:3,Name:"Sahasra",Age:26},
   {Id:4,Name:"Sagar",Age:17}
  ];
  getAge(age:number){
    if(age>25){
      return 0;
    }
    else if(age>18){
      return 1;
    }
    else{
      return 2;
    }
  }
  getColorByAge(a:number){
    if(a==0){
      return "red";
    }
    else if(a==1){
      return "yellow";
    }
    else{
      return "green";
    }
  }

}
