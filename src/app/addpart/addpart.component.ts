import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dailog/dailog.component';

@Component({
  selector: 'app-addpart',
  templateUrl: './addpart.component.html',
  styleUrls: ['./addpart.component.css']
})
export class AddpartComponent {

  constructor(private dialog: MatDialog) { }

  // openDialog(): void {
  //  const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '400px' 
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.arrayService.updateArray(result);
  //     }
  //   });
 
  // }
}


















