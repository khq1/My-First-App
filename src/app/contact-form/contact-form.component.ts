import { Component, ViewChild, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

    

  constructor() { }

  ngOnInit(): void {
  }

}
