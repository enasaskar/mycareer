import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../shared/classes/skill.model';
import { PathService } from '../../../shared/services/path.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PathCategoryService } from '../../../shared/services/PathCategory.service';
import { SkillsService } from '../../../shared/services/skills.service';
import { User } from '../../../users/users.model';
import { UserService } from '../../../shared/services/user.service';
@Component({
  selector: 'app-path-level-skill',
  templateUrl: './path-level-skill.component.html',
  styleUrls: ['./path-level-skill.component.css']
})
export class PathLevelSkillComponent implements OnInit {

  @Input() levelName: string;
  @Input() skills: Skill[];
  @Input() pathId: number;
  showSearch = true;
  public isCreatorEnterprise = true;
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

  constructor(private pathService: PathService, private skillService: SkillsService, private userService: UserService) {
    // check if current user is the creator enterprise
  this.userService.isEnterprise$.subscribe((isEnt: boolean) => {
    if (isEnt) {
      this.isCreatorEnterprise = this.pathService.isCreatorOrAdmin(this.User.id);
    }
  }
  ); }

  myControl: FormControl = new FormControl();
  filteredOptions: Observable<Skill[]>;

  skillOptions: Skill[];

  ngOnInit() {
    this.skillOptions = this.skillService.getAll();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
    // this.skills = this.pathService.getSkillsByLevel(this.pathId, 'intro');
  }

  filter(val: string): Skill[] {
    return this.skillOptions.filter(option =>
      option.Name.toLowerCase().includes(val.toLowerCase()));
  }

  public toggleDiv() {
    this.showSearch = ! this.showSearch;
  }

  public addSkill(skillName: string) {
    if (skillName.length > 0) {
      // not empty
      this.pathService.addSkillToPath(skillName);
    }

    this.toggleDiv();
  }
}
