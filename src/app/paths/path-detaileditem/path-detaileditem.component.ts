import { Component, OnInit, Input } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';
import {ActivatedRoute} from '@angular/router';
import { Skill } from '../../shared/classes/skill.model';


@Component({
  selector: 'app-path-detaileditem',
  templateUrl: './path-detaileditem.component.html',
  styleUrls: ['./path-detaileditem.component.css']
})
export class PathDetaileditemComponent implements OnInit {

  @Input() skills: Skill[];
  constructor(private pathService: PathService, private route: ActivatedRoute) { }



  public Path: IPath = {
    Id : 1,
    Name: 'No Data',
    Description: 'No data yet',
    EntPathCreator: null,
    ImgURL: null,
    NoOfInterestedUsers: 0,
    IsDeleted: false,
    PathMainCategory: null,
    RequiredSkillsCount: 0,
    PathSubCategory: null,
    SimilarPaths: null
  };

  ngOnInit() {

    this.Path.Id = this.route.snapshot.params['id'] || 1;
    this.Path = this.pathService.getById(this.Path.Id );
    this.Path.SimilarPaths = this.pathService.getSimilarPaths(this.Path.Id);
    this.skills = this.pathService.getSkills(this.Path.Id);
  }

}
