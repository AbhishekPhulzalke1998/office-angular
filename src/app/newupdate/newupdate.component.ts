import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewpopUpComponent } from '../newpop-up/newpop-up.component';

@Component({
  selector: 'app-newupdate',
  templateUrl: './newupdate.component.html',
  styleUrls: ['./newupdate.component.css']
})
export class NewupdateComponent {

  constructor(private dialog: MatDialog) { }

  openDialog1(): void {
    const dialogRef = this.dialog.open(NewpopUpComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}

