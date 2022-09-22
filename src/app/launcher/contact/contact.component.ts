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

  contactForm(data: any) {
    const url = 'localhost:8080/contact-us/'
    this.http.post(url, data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    })
  }

}
