import { User } from './../../components/user/user.model';
import { UserService } from './../../components/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  users: User[]

  constructor(private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.showUsers().subscribe(users => {
      this.users = users['cadastros']
    })
  }

  deleteProduct(userid: String):void{
    console.log(userid)
  }


}
