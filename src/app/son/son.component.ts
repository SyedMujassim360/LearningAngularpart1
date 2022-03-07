import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() presentYear!:string;
  @Input() currentClass!:string;
  @Input() total!:number;
  @Input() classTeacher!:string;

  @Output() sectionEvent=new EventEmitter<string>();

  passSection(){
    this.sectionEvent.emit("c to p success")
  }

}
