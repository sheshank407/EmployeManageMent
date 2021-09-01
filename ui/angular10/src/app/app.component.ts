import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management Portal';
  constructor(public router: Router) {
  }
  logOut() {

    localStorage.clear();
    this.router.navigate(["/login"])
  }
  getLoginVal(): boolean {
    var ret: boolean = false;
    if (localStorage.getItem("LoggedIn")){
      ret=true;
    }
    
    return ret
  }
}
