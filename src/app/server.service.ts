import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor( private httpClient:HttpClient) { 

  }

  // for profile
  public getProfile(userQuery){:Observable<any>{
    var dataUrl = `https://api.github.com/users/${userQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET};`
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.Errors)
    );

  }
}
