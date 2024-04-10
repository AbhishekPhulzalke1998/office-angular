import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private http: HttpClient) { }

  fetchpartCount()
  {
    const headers = new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.get<number>("http://localhost/InnovatorServer22/server/odata/Part/$count",{headers});
  }


    filterparts()
    {
      const headers = new HttpHeaders()
      .set("Authorization",`bearer ${localStorage.getItem('token')}`);
      return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('B0FF8DAF59C8455B996C1E99ACDFE36B')/item_number/$value",{headers});

    }

    

    
}
