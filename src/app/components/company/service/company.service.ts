import { environment } from "./../../../../environments/environment";
import { Company } from "./../model/company.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { CompanyGrid } from "../model/company-grid.model";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  baseUrl = `${environment.baseUrl}/company`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(`Erro ao realizar operação: ${e.error.message}`);
    return EMPTY;
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, company).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readPaginated(page: number): Observable<CompanyGrid[]> {
    const url = `${this.baseUrl}/paginate/${page}`;
    return this.http.get<CompanyGrid[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Company> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Company>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(company: Company): Observable<Company> {
    const url = `${this.baseUrl}/${company.id}`;
    return this.http.put<Company>(url, company).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Company> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Company>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
