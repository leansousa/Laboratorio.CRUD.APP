import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySize } from '../model/company-size.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanySizeService {

  baseUrl = `${environment.baseUrl}/companysize`;

  constructor(private http: HttpClient) {}
  
  readAll():Observable<CompanySize[]>{
    return this.http.get<CompanySize[]>(this.baseUrl);
  }

}
