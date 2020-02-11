import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstName: ['John', [Validators.required]],
      lastName: ['Doe'],
      mail: [''],
      age: [''],
      agree: ['false'],
    });
  }

  get nameFromCmp() {
    return this.form.get('firstName');
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value));
  }

}
