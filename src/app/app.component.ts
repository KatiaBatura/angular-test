import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import {UserService} from "./service/user.service";
import {User} from "./model/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    animations: [
        trigger('show', [
            state('in', style({})),
            transition('* => void', [
                style({ height: '!', opacity: 1 }),
                animate(500, style({ height: 0, opacity: 0 }))
            ]),
            transition('void => *', [
                style({ height: 0, opacity: 0 }),
                animate(500, style({ height: '*', opacity: 1 }))
            ])
        ])
    ],
})


export class AppComponent  implements OnInit, OnDestroy {

  usersData;
  private subscription;
  selected = null;

  constructor( private userService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.userService.getUsers().subscribe((users: User) => {

        this.usersData = users;

    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  viewUser(i) {
    this.selected = (this.selected === i ? null : i);
  }

  isActive(i){
    return this.selected === i;

  }

}
