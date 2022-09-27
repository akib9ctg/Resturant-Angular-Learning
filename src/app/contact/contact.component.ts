import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactForm= new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    subject: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)
  });

  AddMessage():void{
    console.log(this.contactForm);
    this.contactForm.reset();
  }
}
