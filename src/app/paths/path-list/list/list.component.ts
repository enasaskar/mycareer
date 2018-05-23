import { Component, OnInit } from '@angular/core';
import { PathService } from '../../../shared/services/path.service';
import { IPath } from '../../../shared/interfaces/IPath';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  paths: IPath[];
  constructor(private pathService: PathService) { }

  ngOnInit() {
    this.paths = this.pathService.getAll();
  }

}
