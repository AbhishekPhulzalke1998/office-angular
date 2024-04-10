import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpselserviceService {

  constructor(private http:HttpClient) { }


  
expsel()
{
 const headers = new HttpHeaders()
 .set("Authorization",`bearer ${localStorage.getItem('token')}`);
 return this.http.get("http://localhost/InnovatorServer22/server/odata/Part('118AECF7C79349EF9C4C8759A3DA4EDD')/Part CAD",{headers});
}
}
