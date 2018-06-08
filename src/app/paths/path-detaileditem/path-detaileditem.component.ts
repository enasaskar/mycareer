import { Component, OnInit } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-path-detaileditem',
  templateUrl: './path-detaileditem.component.html',
  styleUrls: ['./path-detaileditem.component.css']
})
export class PathDetaileditemComponent implements OnInit {

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
    PathSubCategory: null
  };
  public SimilarPaths: IPath[];

  ngOnInit() {
    console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey');
    console.log('this.route id = ', this.route.snapshot.params['id']);
    console.log('this.Path', this.Path);

    this.Path.Id = this.route.snapshot.params['id'] || 10;
    console.log('this.Path', this.Path);
    this.Path = this.pathService.getById(this.Path.Id );
    console.log('this.Path', this.Path);
  }

}
