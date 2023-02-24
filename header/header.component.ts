import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authenticate.service';
import { CommonService } from 'src/app/services/common.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import menuInfo from '../../shared/ndm_menu.json'


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Output() menuEvent = new EventEmitter<boolean>();
  menuData: any[] = [];
  authenticated: boolean = false;
  intervalId: any = null;

  constructor(private commonService: CommonService
    , private router: Router
    , private authService: AuthService,
    private loader: LoaderService
  ) {
  }

  logout() {
    this.loader.start();
    clearInterval(this.intervalId);
    sessionStorage.clear();
    this.authenticated = false;
    this.router.navigate(['./login'])

    // this.authService.logout().subscribe(res => {
    //   this.loader.stop();
    //   clearInterval(this.intervalId);
    //   sessionStorage.clear();
    //   this.authenticated = false;
    //   this.router.navigate(['./login'])
    // })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    // this.menuData = menuInfo;
    if (this.authService.getToken()) {
      this.authenticated = true;
    }
    let expires: any = this.authService.getExpires();
    // if (expires !== null) {
    //   this.intervalId = setInterval(() => {
    //     expires = this.authService.getExpires();
    //     expires = new Date(expires);
    //     if (new Date(expires?.toString()).getTime() < new Date().getTime()) {
    //       console.log('session out');
    //       this.logout();
    //     }
    //   }, 1000);
    // }
  }
}
