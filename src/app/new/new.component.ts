import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
;
  partCount: number = 0;
  filterCount:any;

  constructor(private practice:PracticeService) 
  {

  }

  ngOnInit(): void
  {
    this.practice.fetchpartCount().subscribe((count:number) =>{
      this.partCount = count;
    });
  



    this.practice.filterparts().subscribe((response:any) =>{
      console.log('API Response:', response);
      this.filterCount = response;
    },
    (error: any) => {
      console.error('Error occurred while fetching filter parts:', error);
    }
    );

  }

}
