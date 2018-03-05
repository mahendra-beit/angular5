import { Component } from '@angular/core';

import { FormGroup, FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public title = 'testapp';
public fname ="Mahendrakumar";
public myhide =false;
public mystyle = {
  'color' :'blue',
  'background-color':'red'
}
public showDiv =true;
 public switchOnOff(){
   this.showDiv = !this.showDiv;
 }
 public textColor ="GREEN";

 public kapateam = [
   {name:"Mahendra",city:"Ahmedabad"},
   {name:"Vishawas",city:"Kerala"},
   {name:"Sreenivasa",city:"AP"},
   {name:"Kalayana",city:"Tamilnadu"}
 ]
public uname:string = "msprajap";
 public formSubmit(data:any):void{
   console.log('DATA' ,data )
 }

 constructor(public userDetails:FormGroup){
   this.userDetails = new FormGroup({
     fname: new FormControl('Mahendrakumar',Validators.required),
     lname:new FormControl('S',Validators.required),
     mname:new FormControl('',Validators.required),    
     email:new FormControl('',Validators.required),    
     address : new FormGroup({
      addressline1: new FormControl(),
      addressline2: new FormControl(),
       cname:new FormControl(),
       city:new FormControl()
     })
   }) 
 }
 public onFormSubmit():void{
   console.log(this.userDetails.value)
 }
}
