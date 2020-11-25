import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private current: String;
  constructor(private route: ActivatedRoute,
  private router: Router) { }
  ngOnInit() {
    this.route.firstChild.url.subscribe(data => {
      const path = data[0].path;
      if (path === 'userDashBoard') {
        this.current = 'Dashboard';
      } else {
        this.current = 'My Profile';
      }
    });
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.route.firstChild.url.subscribe(data => {
          const path = data[0].path;
          if (path === 'userDashBoard') {
            this.current = 'Dashboard';
          } else {
            this.current = 'My Profile';
          }
        });
      }
    });
  }

}
