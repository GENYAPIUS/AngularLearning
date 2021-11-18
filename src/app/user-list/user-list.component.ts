import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: User[] = [];
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
