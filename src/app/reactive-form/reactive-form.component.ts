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
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      mail: [null, [Validators.required, Validators.email]],
      age: [null],
      agree: [false, [Validators.required]],
    });
  }

  get nameFromCmp() {
    return this.form.get('firstName');
  }

  get lastNameFromCmp() {
    return this.form.get('lastName');
  }
  get mailFromCmp() {
    return this.form.get('mail');
  }

  get agreeFromCmp() {
    return this.form.get('agree');
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value));
  }

}
