import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(4)]],
      senha: ['', [Validators.required,Validators.minLength(4)]]
    });
  }

  aplicaCssError(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    }
  }

  verificaValidTouched(campo) {
    return !this.loginForm.get(campo).valid && this.loginForm.get(campo).touched; 
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

}
