import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../shared/classes/skill.model';
import { PathService } from '../../../shared/services/path.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PathCategoryService } from '../../../shared/services/PathCategory.service';
import { SkillsService } from '../../../shared/services/skills.service';
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
  constructor(private pathService: PathService, private skillService: SkillsService) { }

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
