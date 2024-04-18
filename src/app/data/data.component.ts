import { Component, OnInit } from '@angular/core';
import { PartserviceService } from '../partservice.service';
import { DialogComponent } from '../dailog/dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { DeleteService } from '../delete.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  parts: any[] = [];

  constructor(private pservice: PartserviceService,
              private delservice:DeleteService,
               private dialog: MatDialog
  ) { }

 
  ngOnInit(): void {
    this.pservice.fetch().subscribe((result: any) => {
      this.parts = result.value;
    });

    //  this.delservice.deletemethod().subscribe((result1:any) => {
    //   this.parts = result1.value;
    //  })
  }

  

  getPropertyNames(arr: any[]): string[] {
    const propertySet = new Set<string>();



    arr.forEach(item => {
      Object.keys(item).forEach(key => propertySet.add(key));
    });
      return Array.from(propertySet);
  }


  setPartData(part:any){
    this.parts = part
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
       width: '400px' 
     });
     dialogRef.afterClosed().subscribe(result => {

        this.pservice.fetch().subscribe((result: any) => {
          this.parts = result.value;
        });
       });
   }



    openDialog1(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
       width: '400px' 
     });
     dialogRef.afterClosed().subscribe(result => {

        this.pservice.fetch().subscribe((result: any) => {
          this.parts = result.value;
        });
       
     });
  
   }
}
