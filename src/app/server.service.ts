import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET } from 'src/credentials/credential';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor( private httpClient:HttpClient) { 

  }

  // for profile
  public getProfile(userQuery):Observable<any>{
    var dataUrl = `https://api.github.com/users/${userQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET};`
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.Errors)
    );

  }

  // for repos 
  public getRepo(userQuery):Observable<any>{
    var dataUrl = `https://api.github.com/users/${userQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET};`
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.Errors)
    );

  }
  public Errors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      //
      errorMessage = `MESSAGE:${error.error.message}`
    }
    else{
      errorMessage = `STATUS:$(error.status) MESSAGE : ${error.message}`;
    }

    return throwError(errorMessage);
  }


}
