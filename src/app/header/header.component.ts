import { Component } from "@angular/core";


@Component({
    selector:'header-data',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

    age:number=33;
    cricTeam:string[]=['Shewag','Gambhir','Viart','Yuvi','Zak','Irfan'];
    cricketer:string='Azhar'


}


