import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartserviceService {
  private baseUrl = 'http://localhost/InnovatorServer22/server/odata/Part';

  constructor(private http: HttpClient) { }

  fetch(): Observable<any> {
    const headers = new HttpHeaders()
      .set("Authorization", `bearer ${localStorage.getItem('token')}`);

    return this.http.get(this.baseUrl, { headers });
  }
}
