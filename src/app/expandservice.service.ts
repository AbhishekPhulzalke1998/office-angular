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
      return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('BDE35011844C499A8BA0AAB21710EFD2')?$expand=created_by_id",{headers});
     }
}
