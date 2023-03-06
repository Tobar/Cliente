import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private Url = 'https://ultraenvios.azurewebsites.net/api/Customer';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.Url).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }
  getSaldoTotal(): Observable<any[]> {
    return this.http.get<any[]>(this.Url).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }
  agregarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.Url, cliente).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );
  }
}
