import { Component, OnInit, Input, Inject} from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Skill } from '../../shared/classes/skill.model';
import { User } from '../../users/users.model';
import { Enterprise } from '../../shared/classes/enterprise';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';


@Component({
  selector: 'app-path-detaileditem',
  templateUrl: './path-detaileditem.component.html',
  styleUrls: ['./path-detaileditem.component.css']
})
export class PathDetaileditemComponent implements OnInit {

  // @Input() skills: Skill[];
  public skills: Skill[];
  @Input() EnterprisesRecommendPath: Enterprise[];

  dialogRef: MatDialogRef<ConfirmDeletePopup>;

  constructor(private pathService: PathService, private route: ActivatedRoute, public dialog: MatDialog,
    private router: Router) { }

  public Path = this.pathService.defaultPath;

  public isEnterprise = true;

  public User: User = {
    id: 0,
    fname: 'John',
    lname: 'Doe',
    email: 'jogn@gmail',
    password : '12345678',
    city: 'Cairo',
    country: 'Egypt',
    telNumber: '010000',
    district: 'Haram',
  };

  ngOnInit() {

    this.Path.Id = this.route.snapshot.params['id'] || 1;
    this.Path = this.pathService.getById(this.Path.Id );
    this.Path.SimilarPaths = this.pathService.getSimilarPaths(this.Path.Id);
    this.skills = this.pathService.getSkills(this.Path.Id);
    console.log( 'skills=', this.skills);
  }

  public enrollUser() {
    // TODO: get user id
    this.pathService.enrollUserToPath(this.User.id, this.Path.Id);
  }

  public RecommendPath() {
    // TODO: get enterprise id
    this.pathService.addEnterpriseRecommendPath(1, this.Path.Id);
  }

  public deleteClicked() {
    // let confirmDelete: boolean;
    // are you sure ?
     this.dialogRef = this.dialog.open(ConfirmDeletePopup, {
      disableClose: false,
      data: {
        name:  this.Path.Name
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
        // do confirmation actions
        // emit delete event/subject
        this.pathService.onDelete.next(this.Path);
        // Go to all Paths page
      this.router.navigate(['/paths']);
      }
      this.dialogRef = null;
    });

  }
}

@Component({
  selector: 'app-confirm-delete-popup',
  templateUrl: './confirm-delete-popup.html',
  styleUrls: ['./path-detaileditem.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class ConfirmDeletePopup {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeletePopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
