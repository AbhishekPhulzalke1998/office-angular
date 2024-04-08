import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { PartserviceService } from '../partservice.service';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})

export class DataComponent {
  parts: any[] = [];
   constructor(private pservice:PartserviceService){}
   
    ngOnInit(){
      this.pservice.fetch().subscribe((result:any)=>{
     
        this.parts = result.value;
      })
    }
}


