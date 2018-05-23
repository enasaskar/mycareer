import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.css']
})
export class PathItemComponent implements OnInit {

  public name = 'Hamada';
  public description = 'This is a description';
  public requiredSkillsCount = 15;
  public imgPath = '../../../assets/route2.jpg';
  constructor() { }

  ngOnInit() {
  }

}
