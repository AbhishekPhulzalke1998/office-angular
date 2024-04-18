import { Component,OnInit } from '@angular/core';
import { SelectserviceService } from '../selectservice.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
   
    // created_by_id = " ";
    selpart:any = {};
   expand: any = {};
    constructor(private select:SelectserviceService) {}

  ngOnInit(): void {
                    this.select.selectparts().subscribe((result:any) =>{
                      console.log("select parts ",result);
                      this.selpart = result;
                  
                      });
                    }
                  }
