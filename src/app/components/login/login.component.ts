import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { UserLogin } from 'src/app/model/UserLogin';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup

  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) {
    this.form = formBuilder.group({
      username: [],
      password: []
    })
   }

   getData(){
      let username = this.form.get('username')?.value
      let password = this.form.get('password')?.value
      
      let userLogin = new UserLogin(username, password)

      this.loginService.login(userLogin).subscribe(
        res => {
          console.log(res)
          sessionStorage.setItem('token', res.token)
          this.router.navigate(['/dashboard'])
        }
      )

      console.log(username + ' ' + password)
   }
  ngOnInit(): void {
  }

}
