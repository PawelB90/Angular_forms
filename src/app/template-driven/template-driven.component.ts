import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  model: any = {};

  constructor() {}

  ngOnInit() {}

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value));
  }
}
