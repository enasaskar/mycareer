import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const navigation = document.querySelector('nav');
    navigation.addEventListener('mousedown', this.makeActive);
  }

  public makeActive(e) {
    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
   e.target.classList.add("active");
  }

}
