import { Component } from '@angular/core';
import { MethodService } from '../method.service';
import { error } from 'console';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent  {
 
  constructor(private methodService: MethodService) { }


  sendMobileNumber(): void {
    const mobileNumber = '9657927822'; 
    this.methodService.sendMobileNumber(mobileNumber).subscribe(
      response => {
        console.log('Response:', response);

      },
      error => {
        console.error('Error:', error);
    
      }
    );
  }
}
