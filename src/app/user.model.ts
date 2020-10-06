export class User{
  public firstName:string;
  public lastName:string;
  public emailId:string;
  public password:string;
  public confirmPassword:string;
  public mobileNumber:number;
  constructor(firstname:string,lastname:string,emailid:string,password:string,confirmpassword:string,mobilenumber:number){
    this.firstName=firstname;
    this.lastName=lastname;
    this.emailId=emailid;
    this.password=password;
    this.confirmPassword=confirmpassword;
    this.mobileNumber=mobilenumber;
  }
}
