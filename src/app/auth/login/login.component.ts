import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service'
import {AuthService} from '../../services/auth.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
      if (res.status) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['/admin']);
      }
    })
  }

}
