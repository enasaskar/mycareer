import { Component, OnInit } from '@angular/core';
import { PathService } from '../../../shared/services/path.service';
import { IPath } from '../../../shared/interfaces/IPath';
import { PathCategoryService } from '../../../shared/services/PathCategory.service';
import { IPathCategory } from '../../../shared/interfaces/ICategory';

@Component({
  selector: 'app-path-edit-info',
  templateUrl: './path-edit-info.component.html',
  styleUrls: ['./path-edit-info.component.css']
})
export class PathEditInfoComponent implements OnInit {

  public path: IPath;
  public categories: IPathCategory[];
  constructor(private pathService: PathService, private pathCategoryService: PathCategoryService) {
    this.path = this.pathService.defaultPath;
    console.log(this.path);
   }

  ngOnInit() {
    this.categories = this.pathCategoryService.getAll();
  }

}
