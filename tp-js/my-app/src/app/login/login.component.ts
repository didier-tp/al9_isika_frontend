import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login'
import { LoginResponse } from '../common/data/loginResponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login : Login = new Login();
  public message :string | undefined ;

  constructor() { }

  public onLogin(){
     this.message = "donnees saisies = " + JSON.stringify(this.login);
     
  }

  

  ngOnInit(): void {
  }

}
