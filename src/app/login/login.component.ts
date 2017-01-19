import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit { 

  ngOnInit() {
  }

   error: any;
    constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

}
