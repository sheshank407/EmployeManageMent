import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  pwd: string = "";
  loginType: string = "superAdmin"
  constructor(public service: SharedService, public activatedRoute: ActivatedRoute, public Router: Router) {

  }


  ngOnInit(): void {
  }
  loginClick(pwd: string) {
    this.pwd = pwd
    if (this.userName == null || this.userName == "") {
      alert("Please Enter User Name")
    }
    if (this.pwd == null || this.pwd == "") {
      alert("Please Enter pwd")
    }
    if (this.userName != null && this.userName != "" && this.pwd != null && this.pwd != "") {
      var RequestBody = {
        userName: this.userName,
        password: this.pwd
      }
      
      this.loginType = "Admin"
      if (this.userName != "Admin") {

        this.loginType = "employee"
      }
      this.service.verifyLoginCreds(RequestBody).subscribe((res => {


        console.log(res);
        localStorage.setItem("LoggedIn", "true");
        if (this.loginType == "Admin") {
          localStorage.setItem("logintype", "Admin")
        }
        else {
          localStorage.setItem("EmployeeId", res[0].EmployeeId)
          localStorage.setItem("logintype", "Employee")
        }
        this.Router.navigate(["/employee"])
      }), (error) => {
        console.log("postError");
        console.log(error);

        alert("Please Verify Credentials")

      })
    }
  }
}
