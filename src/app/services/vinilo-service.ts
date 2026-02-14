import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Vinilo } from '../models/vinilo';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ViniloService {
  private http = inject(HttpClient);
  private API_VINILOS = 'https://app-fire-d9ae2-default-rtdb.firebaseio.com';

getVinilos(): Observable<Vinilo[]> {
  return this.http
    .get<{ [key: string]: Vinilo }>(`${this.API_VINILOS}/vinilos.json`)
    .pipe(
      map((data) => {
        if (!data) return [];

        return Object.entries(data).map(([key, value]) => ({
          ...value,
          id: key // 👈 Firebase Realtime DB usa la key como id
        }));
      })
    );
}



  postVinilo(vinilo: Vinilo): Observable<Vinilo> {
    return this.http.post<Vinilo>(`${this.API_VINILOS}/vinilos.json`, vinilo);
  }

  putVinilo(id: string, vinilo: Vinilo): Observable<Vinilo> {
    return this.http.put<Vinilo>(`${this.API_VINILOS}/vinilos/${id}.json`, vinilo);
  }

  deleteVinilo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_VINILOS}/vinilos/${id}.json`);
  }
}
