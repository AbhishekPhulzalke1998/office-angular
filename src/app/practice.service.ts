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
      return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('BDE35011844C499A8BA0AAB21710EFD2')/item_number/$value",{headers});

    }

    

    
}
