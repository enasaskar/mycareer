import { Component, OnInit, Inject } from '@angular/core';
import { PathService } from '../../../shared/services/path.service';
import { IPath } from '../../../shared/interfaces/IPath';
import { PathCategoryService } from '../../../shared/services/PathCategory.service';
import { IPathCategory } from '../../../shared/interfaces/ICategory';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
// import {} from ''
@Component({
  selector: 'app-path-edit-info',
  templateUrl: './path-edit-info.component.html',
  styleUrls: ['./path-edit-info.component.css']
})
export class PathEditInfoComponent implements OnInit {

  public path: IPath;
  public categories: IPathCategory[];

  public addStart = false;


  // tslint:disable-next-line:max-line-length
  constructor(private pathService: PathService, private pathCategoryService: PathCategoryService, private router: Router, public dialog: MatDialog) {
    this.path = this.pathService.defaultPath;
    console.log(this.path);
   }

  ngOnInit() {
    this.categories = this.pathCategoryService.getAll();
  }

  public addPath (pathForm: FormGroup): number {
    let res = 0;
    this.addStart = true;
    if (pathForm.valid) {
      res = this.pathService.addPath(this.path);
      // if valid => show sucess popup
    const dialogRef = this.dialog.open(SuccessAddPopup, {
        data: {
          msg:  this.path.Name + ' was successfully added.'
        }
      });
      // empty the textBoxes
      this.path.Name = '';
      this.path.Description = '';
      // Go to all Paths page
      this.router.navigate(['/paths']);
    }
     return res;
  }

}

@Component({
  selector: 'app-success-add-popup',
  templateUrl: 'success-add-popup.html',
  styleUrls: ['./path-edit-info.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class SuccessAddPopup {
  constructor(
    public dialogRef: MatDialogRef<SuccessAddPopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
