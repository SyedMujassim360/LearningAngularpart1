import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() name!:string;
  @Input() age!:number;
  @Input() address!:string;
  @Input() img!:string;

  @Output() myEvent=new EventEmitter<string>();

  passData(){
    this.myEvent.emit("Event is triggered")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
