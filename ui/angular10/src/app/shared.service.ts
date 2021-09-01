import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:53535/api";
  readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http: HttpClient) { }

  getEmpList(): Observable<any[]> {
    var employeeId = "0"; 
    if (localStorage.getItem("EmployeeId")) {
      
      employeeId=localStorage.getItem("EmployeeId")
    }
    var params = new HttpParams().append("EmployeeId", employeeId == undefined ? "0" : employeeId);

    return this.http.get<any>(this.APIUrl + '/Employee', { params });
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/Employee', val);
  }

  verifyLoginCreds(val: any) {
    return this.http.post(this.APIUrl + '/Employee/loginCred', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + '/Employee', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.APIUrl + '/Employee/' + val);
  }


  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }



}
