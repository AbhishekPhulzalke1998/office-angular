import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
   

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(PopUpComponent, {
      width: '400px' 
    });
  }
}


