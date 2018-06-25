
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd, ChildActivationEnd } from '@angular/router';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  id: number;
  isLoggedIn: boolean ;
  isLogOut = false;
  isEnterprise: boolean;
  isAdmin: boolean;
  eId: number;

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService) {
      // router.events.subscribe((event) => {
      //   if ( event instanceof ChildActivationEnd) {
      //     this.id = +event.snapshot.firstChild.params['id'];
      //     if (isNaN(this.id)) {
      //       this.id = null;
      //     }
      //   }
      // });
    }

  ngOnInit() {
    const navigation = document.querySelector('nav');
    navigation.addEventListener('mousedown', this.makeActive);
    // console.log(this.route.firstChild);
    // console.log(this.route.firstChild);
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   if (isNaN(this.id)) {
    //     this.id = null;
    //   }
    // });

    this.userService.isUserLoggedIn$.subscribe((bool: boolean) => {this.isLoggedIn = bool; });
    this.userService.id$.subscribe((id: number) => {this.id = id;
      let currentUser;
      this.userService.getUserById(this.id).subscribe(
        (user) => {
          currentUser = user;
          if (currentUser.role === 'enterprise') {
            this.userService.setIsEnterprise(true);
            this.eId = currentUser.enterpriseId;
            console.log('I am an enterprise');
          }
        }
      );
    //  console.log('currentUser.role =', currentUser.role );
    });

      this.userService.isEnterprise$.subscribe((b: boolean) => {this.isEnterprise = b; });
      this.userService.isAdmin$.subscribe((b: boolean) => {this.isAdmin = b; });
  }




  public makeActive(e) {
    const elems = document.querySelector('.active');
    if (elems !== null) {
     elems.classList.remove('active');
    }
   e.target.classList.add('active');
  }

  public onLogOut() {
    this.userService.notSetUser();
    // this.userService.setIsLoggedOut();
    this.userService.notSetUserLoggedIn();
    this.userService.setIsEnterprise(false);
   // this.userService.setIsAdmin(false);
    this.userService.currentUserId = null;
    this.isEnterprise = false;
    this.isAdmin = false;
    this.userService.isAdmin = false;
    this.userService.isEnterprise = false;
    this.router.navigate(['/login']);
  }

}
