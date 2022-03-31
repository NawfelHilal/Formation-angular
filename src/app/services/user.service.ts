import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../appareil/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@smith.com',
      drinkPreference: 'Coca',
      hobbies: [
        'coder',
        'le sport'
      ]
    }
  ];

  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
