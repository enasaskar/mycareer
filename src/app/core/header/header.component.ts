import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd, ChildActivationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute,
    private router: Router) {
      router.events.subscribe((event) => {
        if ( event instanceof ChildActivationEnd) {
          this.id = +event.snapshot.firstChild.params['id'];
          if (isNaN(this.id)) {
            this.id = null;
          }
        }
      });
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
  }

  public makeActive(e) {
    const elems = document.querySelector('.active');
    if (elems !== null) {
     elems.classList.remove('active');
    }
   e.target.classList.add('active');
  }

}
