import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 userModel:any={};
 password:string="";
 confirmPassword:string="";
 status="";
  constructor() { }

  ngOnInit(): void {
  }
  //userModel=new User("Nishitha","Reddy","nishitha999@gmail.com","Nishitha*@1234","Nishitha*@1234",8500241409);




  onSignUp(){
   console.log("Your Registration has completed");
  }
  onKey(){
    if(this.password==this.confirmPassword){
      this.status="password and Confirm Password matched";
    }
    else{
      this.status="password and confirm password are not matched";
    }
  }


}
