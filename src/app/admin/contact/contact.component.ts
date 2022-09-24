import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Subject} from 'rxjs';

declare var $: any;

interface contactData {
  id: number;
  name: string;
  email: string,
  number: number,
  subject: string,
  message: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  contacts: any;

  constructor(
    private _api: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.getList()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  getList() {
    this._api.getTypeRequest('contact-us/').subscribe((data: any) => {
      this.contacts = data;
      // @ts-ignore
      this.dtTrigger.next();
    })
  }

  deleteData(elem: any, id: any) {
    this._api.deleteTypeRequest('contact-us/', id).subscribe((res: any) => {
      if (res.affectedRows >= 1) {
        elem.closest('tr').remove();
      }
    })
  }

  getData(id: any) {
    this._api.getDataTypeRequest('contact-us/', id).subscribe((res: any) => {
      if (res.status) {
        $('#editModal').modal();
      }
    })
  }

  updateData(form: any) {
    console.log(form.value);
  }
}
