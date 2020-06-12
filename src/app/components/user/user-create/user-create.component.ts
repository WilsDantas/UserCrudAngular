import { Nacionalidade } from './../nacionalidade.model';
import { Sexo } from './../sexo.model';
import { NacionalidadeService } from './../nacionalidade.service';
import { SexoService } from './../sexo.service';
import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  user: User = {
    nomeCompleto: "",
    idade: null,
    dataNascimento: "",
    cpf: "",
    nacionalidade: 1,
    sexo: 1
  }

  formulariouser: FormGroup;
  sexos: Sexo
  nacionalidades: Nacionalidade

  constructor(private router: Router,
              private userService: UserService,
              private SexoService: SexoService,
              private NacionalidadeService: NacionalidadeService,
              private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.SexoService.getSexo().subscribe(sexo => {
      this.sexos = sexo['sexo']
    })
    this.NacionalidadeService.getNacionalidade().subscribe(nacionalidade => {
      this.nacionalidades = nacionalidade['nacionalidade']
    })

    this.formulario()
  }

  CreateUser(){
    this.userService.createUser(this.user).subscribe()
    alert("Usuario Cadastrado com Sucesso!");
    this.router.navigate(["user"])
  }

  formulario(){
    this.formulariouser = this.FormBuilder.group({
      nomeCompleto: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
        ])],
      idade: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(2)])],
      dataNascimento: ['',
        Validators.compose([
          Validators.required])],
      cpf: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(11)])],
      nacionalidade: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(1)])],
      sexo: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(1)])]
    })
  }

  get nomeCompleto() {
    return this.formulariouser.get('nomeCompleto');
  }

  get idade() {
    return this.formulariouser.get('idade');
  }

  get dataNascimento() {
    return this.formulariouser.get('dataNascimento');
  }

  get cpf() {
    return this.formulariouser.get('cpf');
  }

  get nacionalidade() {
    return this.formulariouser.get('nacionalidade');
  }

  get sexo() {
    return this.formulariouser.get('sexo');
  }


}
