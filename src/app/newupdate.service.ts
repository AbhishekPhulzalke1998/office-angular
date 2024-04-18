import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewupdateService {

  private baseUrl = "http://localhost/InnovatorServer22/server/odata/Part";

  constructor(private http: HttpClient) { }

  updatemethod(id: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    const body = {
      item_number: data.item_number,
      name: data.name,
      description: data.description
    };

    const url = `${this.baseUrl}('${id}')`; 

    return this.http.patch(url, body, { headers });
  }
}
