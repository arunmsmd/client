import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private _api: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this._api.getTypeRequest('contact-us/').subscribe((res: any) => {
      console.log(res);
    })
  }

}
