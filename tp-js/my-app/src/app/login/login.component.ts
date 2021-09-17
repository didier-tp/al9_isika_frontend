import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login'
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login : Login = new Login();
  public message :string | undefined ;


  constructor(private _loginService :LoginService) { }

  public onLogin(){
     this.message = "donnees saisies = " + JSON.stringify(this.login);
    this._loginService.postLogin$(this.login)
         .subscribe({
           next : (response :LoginResponse) => { this.traiterReponseLogin(response); } ,
           error : (err) => { console.log("error:"+err);
                              this.message="une erreur technique a eu lieu."}
           });
  }

  private traiterReponseLogin(loginResponse :LoginResponse){
    this.message = loginResponse.message;//améliorable !!!
    console.log("loginResponse="+JSON.stringify(loginResponse));
  }


  ngOnInit(): void {
  }

}
