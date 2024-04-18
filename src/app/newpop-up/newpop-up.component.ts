import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NewpopUp1Component } from '../newpop-up1/newpop-up1.component';

@Component({
  selector: 'app-newpop-up',
  templateUrl: './newpop-up.component.html',
  styleUrls: ['./newpop-up.component.css']
})
export class NewpopUpComponent {

  partId:string = '';

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<NewpopUpComponent>) { }

  openSecondDialog(): void {
    const dialogRef = this.dialog.open(NewpopUp1Component, {
      width: '400px',
      data: { partId: this.partId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The second dialog was closed');
   
    });
  }

  cancel(): void {
    this.dialogRef.close(); 
  }
}
