import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Employee } from '../show-emp/EmployeeModel';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {


  @Input() emp: Employee;
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();
  PhotoFilePath: string;
  confirmpassword: string = "";
  DepartmentList: any = [{ DepartmentName: "IT" }];
  disableFields: boolean = false
  constructor(public service: SharedService) {
    var loginType = localStorage.getItem("logintype");
    if (loginType == "Admin") {
      this.disableFields = true;
    }
    console.log();

  }
  ngOnInit(): void {

  }

  addEmployee() {
    var val = this.emp

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
      this.onSearch.emit("Added")
    });
  }

  updateEmployee() {
    var val = this.emp
    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
      this.onSearch.emit("Updated")

    });
  }


  uploadPhoto(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.emp.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.emp.PhotoFileName;
    })
  }

}

