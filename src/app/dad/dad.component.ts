import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.css']
})
export class DadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

sections=[
  {year:"first",branch:"CSE",ppl:70,classTeach:"Manoj"},
  {year:"first",branch:"ISE",ppl:60,classTeach:"Vijay"}
]

recievedSection(e:any){
  console.log(e)
}

}
