import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:string='mujassim syed';
  age:number=23;
  job:string="Developer";
  salary:number=20;
  inputValue:any="Virat";
  greet(){
    return "Good Morning "
  }
  btnColor:string;
  isDisabled:boolean=true;
  fruits:string[]=['Apple',"Banana","Grapes","Mango"];

  // if you don't want to initialte the date use !
  myDOB!:Date;
  
  constructor() { 
    setTimeout(()=>{
      this.isDisabled=false
    },2000)
    const colors=['blue','red','black','yellow','pink']
    this.btnColor= "btn " + colors[Math.floor(Math.random() * 5)]
  }

  convertToINR(){
    alert(this.salary *90)
  }

  getInput(e:any){
     this.inputValue= e.target.value;
  }

  ngOnInit(): void {
  }

}
