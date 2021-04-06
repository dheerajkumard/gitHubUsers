import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  resp:any;
  constructor(private user: UserService) { }

  ngOnInit() {
   
  }

  getUsers(){
    this.user.getUser2s().subscribe((responsedata) => {
      this.resp = responsedata;
    });
  };

}
