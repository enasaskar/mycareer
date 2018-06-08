import { Component, OnInit } from '@angular/core';
import { PathService } from '../../../shared/services/path.service';
import { IPath } from '../../../shared/interfaces/IPath';
import { PathCategoryService } from '../../../shared/services/PathCategory.service';
import { IPathCategory } from '../../../shared/interfaces/ICategory';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path-edit-info',
  templateUrl: './path-edit-info.component.html',
  styleUrls: ['./path-edit-info.component.css']
})
export class PathEditInfoComponent implements OnInit {

  public path: IPath;
  public categories: IPathCategory[];
  constructor(private pathService: PathService, private pathCategoryService: PathCategoryService, private router: Router) {
    this.path = this.pathService.defaultPath;
    console.log(this.path);
   }

  ngOnInit() {
    this.categories = this.pathCategoryService.getAll();
  }

  public addPath (pathForm: FormGroup): number {
    // console.log(pathForm.v);
    let res = 0;
    if (pathForm.valid) {
      res = this.pathService.addPath(this.path);
      console.log('this.path.Id ', this.path.Id );
      // this.path.Id = res;
      this.router.navigate(['/paths']);
      console.log('Done');
    }
     return res;
  }
}
