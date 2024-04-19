import { Component, OnInit } from '@angular/core';
import { PartserviceService } from '../partservice.service';
import { DialogComponent } from '../dailog/dailog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { DeleteService } from '../delete.service';
import { NewpopUpComponent } from '../newpop-up/newpop-up.component';
import { NewpopUp1Component } from '../newpop-up1/newpop-up1.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { NewupdateService } from '../newupdate.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: any;
cancel() {
throw new Error('Method not implemented.');
}
  parts: any[] = [];


  partId:string = '';
  itemNumber: string = '';
  name: string = '';
  description: string = '';

  constructor( private pservice: PartserviceService,
               private delservice:DeleteService,
               private dialog: MatDialog,
               private dialogRef: MatDialogRef<NewpopUp1Component>,
               private newupdateservice: NewupdateService,
               private snackBar: MatSnackBar,

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

  openDialog2(): void {
    const dialogRef = this.dialog.open(NewpopUp1Component, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pservice.fetch().subscribe((result: any) => {
        this.parts = result.value;
      });
     
    });
  }

}
