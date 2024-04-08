import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router:Router) { 
  
  }

    login(data: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

     const body = new URLSearchParams();
       body.append(
                "grant_type","password"
               ); 

               body.append(
                "scope","Innovator"
               ); 

               body.append(
                "client_id","IOMApp"
               );


               body.append(
                "database","InnovatorSolutions22"
               );

               body.append(
                "username","admin"
               );

               body.append(
                "password","607920b64fe136f9ab2389e371852af2"
               );

    this.http.post("http://localhost/InnovatorServer22/oauthserver/connect/token", body, { headers }).subscribe((result: any) => {
      localStorage.setItem("token", result.access_token);
      this.router.navigate(['/data'])
    });
  }
}


