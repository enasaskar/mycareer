
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
  isLoggedIn : boolean ;
  isLogOut:boolean = false;
   
  constructor(private route: ActivatedRoute,
    private router: Router,private userService : UserService) {
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
   
   if(!this.isLogOut){
    this.userService.isUserLoggedIn$.subscribe((bool : boolean) => {this.isLoggedIn = bool;console.log("obs")});
    this.userService.id$.subscribe((id : number) => {this.id = id; console.log(id);})
   }
    

    if(this.isLogOut){
    this.userService.isUserLoggedIn$.subscribe((b : boolean) => {this.isLoggedIn = b;console.log("notlogged")})

    }
  }

  
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values



  public makeActive(e) {
    const elems = document.querySelector('.active');
    if (elems !== null) {
     elems.classList.remove('active');
    }
   e.target.classList.add('active');
  }

  public onLogOut(){
    this.userService.notSetUser();
    this.isLogOut = true;
    this.userService.notSetUserLoggedIn();
    this.router.navigate(['/login']);
  }

}
