import { Component } from '@angular/core';
import { users } from 'src/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mylearning-app';
  cardTitle:string="Type about you";
  users:Array<users>=[
    {name:"saqhib syed",age:19,address:"Bangalore",imagePath:"assets/user4.jpg"},
    {name:"sudhakar kambli",age:29,address:"Belgaum",imagePath:"assets/user1.jpg"},
    {name:"antony naveen",age:25,address:"Chennai",imagePath:"assets/user3.jpg"},
    {name:"salim",age:23,address:"Hyderabad",imagePath:"assets/user2.jpg"}
  ]
  receivedData(e:any){
    console.log(e)
  }
  phoneNo:number=9980017554;
}
