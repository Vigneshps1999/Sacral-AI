import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authenticate.service';
import { NotificationService } from '../services/notification.service';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  // loginForm?: FormGroup = new FormGroup({});
  loginForm: FormGroup = new FormGroup({});
  showForgotPassword: boolean = false;

  constructor(private authService: AuthService,
    private router: Router
    , private toast: NotificationService
    , private loader: LoaderService) {
    this.initiateFormGroup();
  }

  initiateFormGroup() {
    this.loginForm = new FormGroup({
      'userName': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required])
    })
  }

  authenticate() {
    this.validatePage();
    if (this.loginForm.valid) {
      // this.loader.start();
      // this.authService.authenticate(this.loginForm.value).subscribe(res => {
      //   this.loader.stop();
      //   this.authService.setAuthToken(res["token"]);
      //   this.authService.setExpires(new Date(res["expiryTime"]));

      //   // if (!res["newPasswordSet"]) {
      //   //   this.authService.setIsPasswordSet(res["newPasswordSet"]);
      //   //   this.router.navigate(['/change-password']);

      //   // } else {
      //     this.router.navigate(['/']);
      //   // }
      // },
      //   error => {

      //     this.loader.stop();
      //     if (error.status == 401) {
      //       this.toast.showError("Invalid username or password");
      //     }
      //     else if (error.error.apierror) {
      //       this.toast.showError(error.error.apierror.message);
      //     }
      //     else {
      //       this.toast.showError("Error occured while login");
      //     }
      //   })

      // // let token ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmFuZCIsImlhdCI6MTY2MjcxMjc4OCwiZXhwIjoxNjYyNzQ4Nzg4LCJ1c2VyU2Vzc2lvbiI6eyJpZCI6MTMwNCwibnVtYmVyIjowLCJ1c2VyTmFtZSI6ImFuYW5kIiwibGV2ZWwiOjE2LCJwYXJlbnRUeXBlIjoiVSIsImZfcGFyZW50IjpudWxsLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IiwiY29tcGFueSI6bnVsbH19.1qYZx-SAnSp-qMAnvFrtV_EA3hh9qTu93rttj2jV6WFJDoHF0aVREEqs3aXBrkQQLYspfp2bDWaPCMkQi5LrEA";
      let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmFuZCIsImlhdCI6MTY2MjcxMjk4NiwiZXhwIjoxNjYyNzQ4OTg2LCJ1c2VyU2Vzc2lvbiI6eyJpZCI6MTMwNCwibnVtYmVyIjowLCJ1c2VyTmFtZSI6ImFuYW5kIiwibGV2ZWwiOjE2LCJwYXJlbnRUeXBlIjoiVSIsImZfcGFyZW50IjpudWxsLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IiwiY29tcGFueSI6bnVsbH19.ltxe8KF1Iju489m10kaf4PZCmlF1GzMCBdSX4tgOFxEidAATgeNgOGdLt72S4_q8QT8QFq8UUeg0QXvKucEzYw";

      this.authService.setAuthToken(token);
      this.router.navigate(['/']);
    }
  }

  validatePage(): boolean {
    Object.keys(this.loginForm.controls).forEach(key => {
      if (key !== null) {
        this.loginForm.get(key)?.markAsDirty();
        this.loginForm.get(key)?.markAsTouched();
      }
    })
    return this.loginForm.valid;
  }
}

