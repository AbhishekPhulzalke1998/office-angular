import { Component, OnInit } from '@angular/core';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  parts: any[] = [];

  constructor(private pservice: PartserviceService) { }

  ngOnInit(): void {
    this.pservice.fetch().subscribe((result: any) => {
      this.parts = result.value;
    });
  }

  getPropertyNames(arr: any[]): string[] {
    let propertyNames: string[] = [];
    arr.forEach(item => {
      Object.keys(item).forEach(key => {
        if (!propertyNames.includes(key)) {
          propertyNames.push(key);
        }
      });
    });
    return propertyNames;
  }
}



