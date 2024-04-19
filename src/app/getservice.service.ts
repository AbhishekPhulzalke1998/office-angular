import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  private baseUrl = "http://localhost/InnovatorServer22/server/odata/Part"

  constructor(private http:HttpClient) { }
   
  getmethod(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  
 
    const url = `${this.baseUrl}('${id}')?$select=item_number,description,name`;
   console.log(url);
    return this.http.get(url, { headers });
  }
  
}  

