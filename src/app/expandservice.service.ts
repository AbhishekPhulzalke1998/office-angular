import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpandserviceService {

  constructor(private http: HttpClient) { }

  expandparts()
    {
      const headers = new HttpHeaders()
      .set("Authorization",`bearer ${localStorage.getItem('token')}`);
      return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('B0FF8DAF59C8455B996C1E99ACDFE36B')?$expand=created_by_id",{headers});
     }


 


}
