import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateService } from '../update.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent {
cancel() {
throw new Error('Method not implemented.');
}

  itemNumber: string = '';
  name: string = '';
  description: string = '';

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    private updateservice: UpdateService,
    private snackBar: MatSnackBar
  ) {}

  UpdatePart(): void {
    const partData = {
      item_number: this.itemNumber,
      name: this.name,
      description: this.description
    };

    this.updateservice.updatemethod(partData).subscribe(
      response => {
        console.log('Part updated successfully:', response);
        this.dialogRef.close(); // Close the dialog after adding the part
        this.snackBar.open('Part updated successfully', 'Close', { duration: 5000, verticalPosition: 'top' });
      },
      error => {
        console.error('Error adding part:', error);
        this.snackBar.open('Error updating the part part', 'Close', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }
}

