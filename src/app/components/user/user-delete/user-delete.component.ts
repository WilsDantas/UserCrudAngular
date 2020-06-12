import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User = {
    nomeCompleto: "",
    idade: null,
    dataNascimento: "",
    cpf: "",
    nacionalidade: 1,
    sexo: 1
  }

  constructor(private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.ShowByIdUser(id).subscribe(user => {
      this.user = user
    })
  }

  deleteUser():void{
    this.userService.DeleteUser(this.user.id).subscribe(() => {
      this.router.navigate(['/user'])
    })
  }

  cancel(): void{
    this.router.navigate(['/user'])
  }


}
