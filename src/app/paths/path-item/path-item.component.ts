import { Component, OnInit, Input } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.css']
})
export class PathItemComponent implements OnInit {

  // public name = 'Hamada';
  // public description = 'This is a description';
  // public requiredSkillsCount = 15;
  // public imgPath = '../../../assets/img/avatar-2.jpg';

  @Input() Path: IPath;
  constructor() { }

  ngOnInit() {
  }

}
