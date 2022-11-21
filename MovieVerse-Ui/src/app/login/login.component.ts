// import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
// loginForm: FormGroup<any>;
// logIn() {
// throw new Error('Method not implemented.');
// }
// email: any;
// password: any;
// tosignup() {
// throw new Error('Method not implemented.');
// }
// loading: any;

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameCtrl:FormControl;
  passwordCtrl:FormControl;
  loginGroup: FormGroup;
  flag = false;
  errMsg: string | undefined;

  constructor(private builder:FormBuilder,private router:Router,private authService:AuthenticationService) { 
    this.userNameCtrl=builder.control('');
    this.passwordCtrl=builder.control('');
    this.loginGroup=builder.group({
      userName: this.userNameCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

    const username = this.userNameCtrl.value;
    const password = this.passwordCtrl.value;

    const observer = {
      next: (token: string) => {
        console.log('received token', token);
        this.errMsg = undefined;
        this.authService.saveToken(username, token);
        
        // this.router.navigate([`/city-weather/${localStorage.getItem('currentCity')}/null`]);
        this.router.navigate([`/movies`]);
      },

      error: (err: Error) => {
        this.errMsg = err.message;
        this.flag = true;
        setInterval(()=>{
          this.flag = false;
        },2000)
        console.log("error",err);
      },
    };
    const observable: Observable<string> = this.authService.login(
      username,
      password
    );
    observable.subscribe(observer);
    
  }

}
