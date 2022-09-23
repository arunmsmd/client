import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() isLogin = false;
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.isLogin);
  }
  logout() {
    this._auth.clearStorage()
    this._router.navigate(['']);
  }

}
