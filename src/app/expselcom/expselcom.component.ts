import { Component, OnInit } from '@angular/core';
import { ExpselserviceService } from '../expselservice.service';

@Component({
  selector: 'app-expselcom',
  templateUrl: './expselcom.component.html',
  styleUrls: ['./expselcom.component.css']
})
export class ExpselcomComponent implements OnInit {

 expsel:any;

  constructor(private expand:ExpselserviceService){}

  ngOnInit(): void {
    
    this.expand.expsel().subscribe((result:any) =>{
      console.log("Relationship cad ",result);
      this.expsel = result;
     
      });

  }

}
