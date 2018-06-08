import { Component, OnInit } from '@angular/core';
import { PathCategoryService } from '../../shared/services/PathCategory.service';
import { IPathCategory } from '../../shared/interfaces/ICategory';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {



  public PathCategories: IPathCategory[];
  public paths: IPath[];
    constructor(private pathCategoryService: PathCategoryService,
      private pathService: PathService) { }

  ngOnInit() {
    this.PathCategories = this.pathCategoryService.getAll();
    this.paths = this.pathService.getAll();
  }

}
