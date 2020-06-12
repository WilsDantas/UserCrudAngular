import { NacionalidadeService } from './../nacionalidade.service';
import { Nacionalidade } from './../nacionalidade.model';
import { Sexo } from './../sexo.model';
import { SexoService } from './../sexo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  formulariouser: FormGroup;
  user: User
  sexos: Sexo
  nacionalidades: Nacionalidade

  constructor(private router: Router,
    private userService: UserService,
    private NacionalidadeService: NacionalidadeService,
    private SexoService: SexoService,
    private route: ActivatedRoute,
    private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.ShowByIdUser(id).subscribe(user => {
      this.user = user['cadastros']
    })
    this.SexoService.getSexo().subscribe(sexo => {
      this.sexos = sexo['sexo']
    })
    this.NacionalidadeService.getNacionalidade().subscribe(nacionalidade => {
      this.nacionalidades = nacionalidade['nacionalidade']
    })

    this.formulario()
    
  }

  updateUser(): void {
    this.userService.UpdateUser(this.user).subscribe(() => {
      this.router.navigate(['/user'])
    })
  }

  cancel(): void {
    this.router.navigate(['/user'])
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
