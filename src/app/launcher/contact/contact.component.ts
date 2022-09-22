import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  formMassage = false;

  contactForm(form: any) {
    const url = 'http://localhost:8080/contact-us/'
    this.http.post(url, form.value).subscribe({
      next: (response) => {
        this.formMassage = true;
        form.form.reset();
      },
      error: (error) => console.log(error)
    })
  }

}
