import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private baseUrl = "http://localhost/InnovatorServer22/server/odata/Part"

  constructor(private http:HttpClient) { }

  deletemethod(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  
    return this.http.delete(`${this.baseUrl}('${id}')`, { headers });
  }
}  

