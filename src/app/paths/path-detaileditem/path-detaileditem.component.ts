import { Component, OnInit, Input, Inject } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Skill } from '../../shared/classes/skill.model';
import { User } from '../../users/users.model';
import { Enterprise } from '../../shared/classes/enterprise';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserService } from '../../shared/services/user.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SkillsService } from '../../shared/services/skills.service';


@Component({
  selector: 'app-path-detaileditem',
  templateUrl: './path-detaileditem.component.html',
  styleUrls: ['./path-detaileditem.component.css']
})
export class PathDetaileditemComponent implements OnInit {

  // Id$: Observable<{}>;
  // @Input() skills: Skill[];
  public skillsIntro: Skill[];
  public skillsIntermediate: Skill[];
  public skillsAdvanced: Skill[];
  @Input() EnterprisesRecommendPath: Enterprise[];

  dialogRef: MatDialogRef<ConfirmDeletePopup>;

  constructor(private pathService: PathService, private route: ActivatedRoute, public dialog: MatDialog,
    private router: Router, private userService: UserService, private skillService: SkillsService) {

     }

  public Path = this.pathService.defaultPath;

  public isCreatorEnterprise = false;
  public isEnterprise = false;
  public isLoggedIn: boolean;
  public eId: number;

  public enrolledUser: boolean;
  public recommeded: boolean;

  public User: User = {
    id: 0,
    fname: 'John',
    lname: 'Doe',
    email: 'jogn@gmail',
    password: '12345678',
    city: 'Cairo',
    country: 'Egypt',
    telNumber: '010000',
    district: 'Haram',
  };

  ngOnInit() {
    // Get currunt path data
    // this.Path.Id = this.route.snapshot.params['id'] || 1;
    // debugger
    this.route.params.subscribe ( (params) => {
      this.Path.Id = params['id'];
      this.pathService.getByIdApi(this.Path.Id).subscribe( data => {
        this.Path = data;
        console.log( 'current path = ', this.Path);
      });
      // this.Path.ImgURL = '../../../assets/img/avatar-2.jpg';
      
      // this.Path.SimilarPaths = this.pathService.getSimilarPaths(this.Path.Id);
      // this.skillsIntro = this.skillService.getSkillsByLevel(this.Path.Id, 'Intro');
      // this.skillsIntermediate = this.skillService.getSkillsByLevel(this.Path.Id, 'Intermediate');
      // this.skillsAdvanced = this.skillService.getSkillsByLevel(this.Path.Id, 'Advanced');
      // debugger
    });

    // check if current user is the creator enterprise
    this.isEnterprise =  this.userService.getIsEnterprise();
    this.isCreatorEnterprise = this.userService.getIsEnterprise();
    // console.log('getIsEnterprise', this.userService.getIsEnterprise());
    // console.log('IsEnterprise', this.userService.isEnterprise);
    // this.isCreatorEnterprise = this.pathService.isPathCreator(this.User.id, this.Path.Id);


    // should ne handled by service according to current user logged in 
    this.enrolledUser = false;
    this.recommeded = false;
  }

  public enrollUser() {
    // TODO: get user id
    this.pathService.enrollUserToPath(this.User.id, this.Path.Id);
    this.enrolledUser = true;
  }

  public RecommendPath() {
    // TODO: get enterprise id
    this.pathService.addEnterpriseRecommendPath(1, this.Path.Id);
    this.recommeded = true;
  }

  public deenrollUser() {
    // TODO: get user id
    this.pathService.deenrollUserToPath(this.User.id, this.Path.Id);
    this.enrolledUser = false;
  }

  public unRecommendPath() {
    // TODO: get enterprise id
    this.pathService.removeEnterpriseRecommendPath(1, this.Path.Id);
    this.recommeded = false;
  }
  public deleteClicked() {
    // let confirmDelete: boolean;
    // are you sure ?
    this.dialogRef = this.dialog.open(ConfirmDeletePopup, {
      disableClose: false,
      data: {
        name: this.Path.Name
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
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
