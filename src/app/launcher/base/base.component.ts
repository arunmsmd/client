import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class LauncherBaseComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.isUserLogin();
    console.log(this.isLogin);
  }

  ngAfterViewInit() {
    this.isUserLogin();
  }

  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }


}
