import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartserviceService {

  constructor(private http: HttpClient) { }

  fetch() {
    const headers = new HttpHeaders()
      .set("Authorization", `bearer ${localStorage.getItem('token')}`);

    return this.http.get("http://localhost/InnovatorServer22/server/odata/Part", { headers });
  }
}
