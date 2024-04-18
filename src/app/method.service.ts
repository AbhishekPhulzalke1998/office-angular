import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MethodService {

  constructor(private http:HttpClient) { }


  sendMobileNumber(mobileNumber: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    });

    const body = { 'stud_mobileno': mobileNumber };
    return this.http.post<any>('http://localhost/InnovatorServer22/server/odata/method.stud_mobile_No', body, { headers });
}
  
}


