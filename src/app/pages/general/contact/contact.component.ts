import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  private titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle("contact page");
  }
}