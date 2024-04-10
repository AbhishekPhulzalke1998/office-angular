import { Component,OnInit } from '@angular/core';
import { ExpandserviceService } from '../expandservice.service';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.css']
})
export class ExpandComponent implements OnInit {
  
  expands:any
  selexpand:any


    constructor(private expand:ExpandserviceService){}

    ngOnInit(): void {
      this.expand.expandparts().subscribe((result:any) =>{
        console.log("expand parts ",result);
        this.expands = result;
       
        });



      }
    }
   

