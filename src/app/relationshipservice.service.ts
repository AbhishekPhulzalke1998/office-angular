import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelationshipserviceService {

  constructor(private http:HttpClient) {}

  retrive()
  {
    const headers = new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('1039BFDB123D48CE8C3AB4F838FDF34D')/Part CAD",{headers})
  }
}
