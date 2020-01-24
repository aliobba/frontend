import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {History} from 'src/app/model/history';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8000';

  private messageSource = new BehaviorSubject('default');
  public currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }



  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getAll(): Observable<History[]> {
    return this.http.get<History[]>(`${this.baseUrl}` + `/findAll`);
  }

  insert(data: any) {
    return this.http.post(`${this.baseUrl}` + `/post`, data).toPromise();
  }


}
