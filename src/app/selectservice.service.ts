import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectserviceService {

  constructor(private http: HttpClient) { }

  selectparts()
    {
      const headers = new HttpHeaders()
      .set("Authorization",`bearer ${localStorage.getItem('token')}`);
      return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('1039BFDB123D48CE8C3AB4F838FDF34D')?$select=created_by_id",{headers});
     }
}
