import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Employee } from '../show-emp/EmployeeModel'
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {


  EmployeeList: Employee[] = [];

  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: Employee;
  disableFields: boolean = false;
  constructor(public service: SharedService) {
    this.emp = new Employee();
    var loginType = localStorage.getItem("logintype");
    if (loginType == "Admin") {
      this.disableFields = true;
    }

  }

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = new Employee();
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;

  }

  editClick(item) {
    console.log(item);

    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure?')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
  hideAfterSaving(obj) {
    this.closeClick()
    document.getElementById("close").click();
  }
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
    
  }


  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {


      this.EmployeeList = data["EmployeeData"];

    });
  }

}

