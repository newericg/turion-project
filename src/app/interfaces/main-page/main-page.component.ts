import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../shared/user';
import { PhonePipe } from '../../shared/phone.pipe';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ReactiveFormsModule, PhonePipe],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  formCliente!: FormGroup;

  passwordType: string = 'password'
  passwordIconClass: string = 'bi bi-eye-slash'

  departamentos = [
    { name: 'Administrativo' },
    { name: 'Financeiro' },
    { name: 'Compras' },
    { name: 'Faturamento' },

  ];

  constructor() { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(cliente: User) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome, [
        Validators.required,
      ]),
      celular: new FormControl(cliente.celular, [
        Validators.required,
      ]),
      departamento: new FormControl(this.departamentos[0].name, [
        Validators.required,
      ]),
      email: new FormControl(cliente.email, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      senha: new FormControl(cliente.senha, [
        Validators.minLength(8),
        Validators.required,
      ]),

    })
  }

  get nome() {
    return this.formCliente.get('nome');
  }

  get celular() {
    return this.formCliente.get('celular');
  }

  get email() {
    return this.formCliente.get('email');
  }

  get senha() {
    return this.formCliente.get('senha');
  }

  showPassword() {
    this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
    this.passwordIconClass === 'bi bi-eye-slash' ? this.passwordIconClass = 'bi bi-eye' : this.passwordIconClass = 'bi bi-eye-slash'
  }

  clearInput(item: string) {
    this.formCliente.get(item)?.reset()
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onSubmit() {
    console.log('form-post', this.formCliente?.value);
  }


}
