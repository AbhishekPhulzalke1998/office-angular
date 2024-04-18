import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private baseUrl = 'http://localhost/InnovatorServer22/server/odata/Part(\'4A9CC8FEA6E7423583E944AE320AB1D6\')';

  constructor(private http: HttpClient) {}


  updatemethod(data:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  const body = {
    item_number: data.item_number,
    name: data.name,
    description: data.description
  };

  return this.http.patch(this.baseUrl, body, { headers });
}
}