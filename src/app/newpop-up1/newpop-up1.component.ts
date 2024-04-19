import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewupdateService } from '../newupdate.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetserviceService } from '../getservice.service';
 

@Component({
  selector: 'app-newpop-up1',
  templateUrl: './newpop-up1.component.html',
  styleUrls: ['./newpop-up1.component.css']
})
export class NewpopUp1Component implements OnInit {
  partId: string = '';
  itemNumber: string = '';
  name: string = '';
  description: string = '';

  constructor(
    private dialogRef: MatDialogRef<NewpopUp1Component>,
    private newupdateservice: NewupdateService,
    private snackBar: MatSnackBar,
    private getService:GetserviceService,
    @Inject(MAT_DIALOG_DATA) public data: { partId: string }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.partId) {
      this.partId = this.data.partId;
      this.fetchPartData();
    }
  }

  fetchPartData(): void {
    if (this.partId) {
      this.getService.getmethod(this.partId).subscribe(
        (response: any) => {
         this.itemNumber = response.item_number;
          this.name = response.name;
          this.description = response.description;
        },
        (error: any) => {
          console.error('Error fetching part data:', error);
        
        }
      );
    }
  }
  
  UpdatePart(): void {
    const partData = {
      partId: this.partId,
      item_number: this.itemNumber,
      name: this.name,
      description: this.description
    };

    this.newupdateservice.updatemethod(this.partId, partData).subscribe(
      (response: any) => {
        console.log('Part updated successfully:', response);
        this.dialogRef.close();
        this.snackBar.open('Part updated successfully', 'Close', { duration: 5000, verticalPosition: 'top' });
      },
      (error: any) => {
        console.error('Error updating part:', error);
        this.snackBar.open('Error updating the part', 'Close', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
