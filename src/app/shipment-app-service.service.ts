import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{ catchError } from 'rxjs/operators';
import { Observable, pipe, throwError, from } from 'rxjs';
import { Provider } from'../app/provider/Provider';
import { contact } from './provider/contect';
import { addContact } from './add-contact/addContact';
import { Title } from './add-contact/Title';
import{ EditProvider } from'./edit-provider/EditProvider';
@Injectable({
  providedIn: 'root'
})
export class ShipmentAppServiceService {

  private _url: string ="https://localhost:44317/api/";
  //private _url2: string ="https://localhost:44317/api/providers";


  constructor(private http: HttpClient, private _http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error") ;
    //return throwError(error)
  }
  // all provider function
  getProviders(): Observable<Provider[]>{

    console.log("Work!");
    return this._http.get<Provider[]>(this._url + "providers").pipe(catchError(this.errorHandler))

  }

  getProvidersByID(Id:number): Observable<Provider[]>{
    return this._http.

    get<Provider[]>(this._url + "providers" + "/" + Id).pipe(catchError(this.errorHandler))

  }

  EditProviders(Id: number, Pro: EditProvider){
    console.log("Ok");
    return this.http
    .put<any>(this._url + "providers" + "/" + Id, Pro)
    .pipe(catchError(this.errorHandler));

  }
  DeleteProvider(Id: number){
    console.log("Deleted!");
    return this.http
    .delete<any>(this._url + "providers" + "/" + Id)
    .pipe(catchError(this.errorHandler));

  }
  // All Contact Function

  getContact(): Observable<contact[]>{
    console.log("contact Work! ");
    return this._http.get<contact[]>(this._url + "/" + "contacts").pipe(catchError(this.errorHandler))

  }
  Addcontact(cnt : addContact){
    console.log("saved!");
    return this._http
    .post<any>(this._url + "contacts", cnt)
    .pipe(catchError(this.errorHandler));


   }


   deleteContact(id: number){
    console.log("Deleted");
    return this.http
    .delete<any>(this._url + "/" +id)
    .pipe(catchError(this.errorHandler));
  }

  EditContact(id: number,Conts:contact){

    return this.http
    .put<any>(this._url + "/" +id, Conts)
    .pipe(catchError(this.errorHandler));

  }

   getTitle(): Observable<Title[]>{
    console.log("contact Work! ");
    return this._http.get<Title[]>(this._url + "/" + "Title").pipe(catchError(this.errorHandler))

  }


  }
