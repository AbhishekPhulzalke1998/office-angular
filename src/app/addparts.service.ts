import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddpartsService {
  updatemethod(partData: { item_number: string; name: string; description: string; }) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost/InnovatorServer22/server/odata/Part';

  constructor(private http: HttpClient) {}

  addrow(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    const body = {
      item_number: data.item_number,
      name: data.name,
      description: data.description
    };

    return this.http.post(this.baseUrl, body, { headers });
  }
}
