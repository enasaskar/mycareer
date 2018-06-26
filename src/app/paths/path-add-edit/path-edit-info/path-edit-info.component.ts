import { Component, OnInit, Inject } from '@angular/core';
import { PathService } from '../../../shared/services/path.service';
import { IPath } from '../../../shared/interfaces/IPath';
import { PathCategoryService } from '../../../shared/services/PathCategory.service';
import { IPathCategory } from '../../../shared/interfaces/ICategory';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  public addOperation = true;


  // tslint:disable-next-line:max-line-length
  constructor(private pathService: PathService, private pathCategoryService: PathCategoryService,
    private router: Router, public dialog: MatDialog, private route: ActivatedRoute) {
      this.path = this.pathService.defaultPath;
   }

  ngOnInit() {
    this.categories = this.pathCategoryService.getAll();
    this.path.Id = this.route.snapshot.params['id'] || -1;
    if (this.path.Id === -1 ) {
      this.path = this.pathService.defaultPath;
    }
    else {
      this.pathService.getByIdApi(this.path.Id).subscribe(data => {
        this.path = data;
      });
      this.addOperation = false;
    }

  }

  public addPath (pathForm: FormGroup): number {
    let res = 0;
    if (this.addOperation) {
      this.addStart = true;
      if (pathForm.valid) {
        // res = this.pathService.addPath(this.path);
        this.pathService.addPathApi(this.path).subscribe( data => {
          res = data.Id;
          console.log( 'new path = ', data);
        });
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
    } else {
      // Edit operation
      if (pathForm.valid) {
        // edit path
        // this.pathService.edit(this.path);
        this.pathService.editApi (this.path).subscribe(data => {
          console.log('done edit, path = ', data);
          this.path = data;
          this.router.navigate(['/paths', 'profile', this.path.Id]);
        });
        // Go to all Path profile
      }
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
