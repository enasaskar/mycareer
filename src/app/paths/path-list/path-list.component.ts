import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {

  public pathsList = [{
    name: 'Web',
    description: 'This is a web path',
    imgPath: '../../../assets/img/avatar-2.jpg',
    requiredSkillsCount: 20
  }, {
    name: 'Android',
    description: 'This is an Android path',
    imgPath: '../../../assets/img/avatar-2.jpg',
    requiredSkillsCount: 23
  }, {
    name: 'IoT',
    description: 'This is a IoT path',
    imgPath: '../../../assets/img/avatar-2.jpg',
    requiredSkillsCount: 21
  }, {
    name: 'Embedded',
    description: 'This is an Embedded path',
    imgPath: '../../../assets/img/avatar-2.jpg',
    requiredSkillsCount: 29
  }, ];
  constructor() { }

  ngOnInit() {
  }

}
