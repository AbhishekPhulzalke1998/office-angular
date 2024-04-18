import { Component,OnInit } from '@angular/core';
import { RelationshipserviceService } from '../relationshipservice.service';

@Component({
  selector: 'app-relationshipcomponent',
  templateUrl: './relationshipcomponent.component.html',
  styleUrls: ['./relationshipcomponent.component.css']
})
export class RelationshipcomponentComponent  implements OnInit {

  relatinship11:any

  constructor(private relationship:RelationshipserviceService) {}
  ngOnInit(): void {

    this.relationship.retrive().subscribe((result:any) =>{
      console.log("relationship part is :- ",result);
      this.relatinship11 = result;
    })
    
  }

}
