import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Driver } from '../models/driver';
import { Observable } from 'rxjs';
import { Telefono } from '../models/telefono';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url = 'drivers';
  url2 = "Mensaje"
  
  constructor(private http: HttpClient) { }

  public getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${environment.apiUrl}/${this.url}`);
  }

  public postMensaje(telefono: Telefono): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.url2}`, telefono);
  } 

}
