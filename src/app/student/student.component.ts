import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title:string="student details";
  isDisable:false;
  isActive:false;
  imgsrc="/assets/school1.jpg";
  imgonline="https://c8.alamy.com/comp/EFDEX8/indian-school-students-friends-group-EFDEX8.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log("Submit button clicked");
  }
  onkeyup(stu){
    console.log(stu);
  }
  onkey(){
    console.log("First Name key pressed");
  }
  parent(){
    console.log("div tag clicked");
  }
  onreset(event){
    event.stopPropagation();
    console.log("reset button clicked");
  }

}
