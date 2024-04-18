import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddpartsService } from '../addparts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataComponent } from '../data/data.component';
import { PartserviceService } from '../partservice.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DialogComponent {
cancel() {
throw new Error('Method not implemented.');
}
  itemNumber: string = '';
  name: string = '';
  description: string = '';
  parts: any[] = [];

  constructor(
    // private data1:DataComponent,
    private partser:PartserviceService,
    public dialogRef: MatDialogRef<DialogComponent>,
    private addService: AddpartsService,
    private snackBar: MatSnackBar,
    
  ) {}

  addPart(): void {
    const partData = {
      item_number: this.itemNumber,
      name: this.name,
      description: this.description
    };

    this.addService.addrow(partData).subscribe(
      response => {
        
        console.log('Part added successfully:', response);
        this.dialogRef.close();
        this.snackBar.open('Part added successfully', 'Close', { duration: 5000, verticalPosition: 'top' });

        this.partser.fetch().subscribe((result: any) => {
          this.parts = result.value;
        });

                                 
       
      },
      error => {
        console.error('Error adding part:', error);
        this.snackBar.open('Error adding part', 'Close', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }
}
