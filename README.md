# Employee Management System
  Employee Management System is a application developed to maintain the details of employees working in any organization.

  Some of the features of this system are:

    System users(All) can login into application with credentials and view details.

    System users(Admin) can add new employee details.

    System users(Employee) can view details .

    System users(Admin) can delete the employee from Grid.
# Getting Started
 /* software required to run project */
 1)Angular 10 or more
 2)Dot Net V4.0 or more
 3)Node JS v12.16.1
# API
/* API's created in .net*/
1) Get Request for api/Employee?EmployeeId=0
   Use to fetch All Employee Details of Logged in Employee Details,
   For Admin Login Employee Id is sent as Zero for employee login respective EmployeeId.
2)POST Request for api/Employee
  It is used to add new Employee into the database,
  for this data is need to be send in format of Employee Model class
3)PUT Request for api/Employee
  It is used to save the edited fields of  existing employee   in the database,
  for this data is need to be send in format of Employee Model class.
4)DELETE Request for /api/Employee/1
  It is used to delete an employee from the database,
  for this we send employee id in params for this request.
5) api/Employee/loginCred  
   It is used to verify the login credentials,
   for this we send username and password.
6)api/Employee/SaveFile
  It is used to save selected image.

# Run
/* Add steps to how to run the app*/   
1)Install node modules in angular 
2)Use "ng serve" command to run the angular application
3)Build the APi solution
4)Run the api solution


