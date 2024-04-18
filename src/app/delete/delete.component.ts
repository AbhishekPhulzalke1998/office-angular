import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataComponent } from '../data/data.component';
import { DeleteService } from '../delete.service';
import { PartserviceService } from '../partservice.service';
import { response } from 'express';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
  cancel() {
    throw new Error('Method not implemented.');
    }

    Id: string = '';
    parts:any[] = [];

    constructor( 
      public dialogRef: MatDialogRef<DeleteComponent>,
      private deleteservice:DeleteService,
      private snackBar: MatSnackBar,
      private partser:PartserviceService
    ){}

    DeletePart(): void {
        
      

      this.deleteservice.deletemethod(this.Id).subscribe(
        response => {
          console.log('Part deleted successfully:', response);
          this.dialogRef.close();
          this.snackBar.open('Part deleted successfully', 'Close', { duration: 5000, verticalPosition: 'top' });
    
          this.partser.fetch().subscribe((result: any) => {
            this.parts = result.value;
          });
        },
        error => {
          console.error('Error deleting part:', error);
          this.snackBar.open('Error deleting part', 'Close', { duration: 3000, verticalPosition: 'top' });
        }
      );
    }
  }    
