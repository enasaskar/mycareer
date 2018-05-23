import { Component, OnInit } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';

@Component({
  selector: 'app-path-detaileditem',
  templateUrl: './path-detaileditem.component.html',
  styleUrls: ['./path-detaileditem.component.css']
})
export class PathDetaileditemComponent implements OnInit {

  constructor() { }



  public Path: IPath;
  public NoOfInterestedUsers: number;
  public MainCategory: string;
  public SubCategory: string;
  // public List<Skill> IntroLevelSkills { get; set; }
  // public List<Skill> IntermediateLevelSkills { get; set; }
  // public List<Skill> AdvancedLevelSkills { get; set; }

  // public IEnumerable<EnterpriseIndexViewModel> EnterprisesRecommendPath { get; set; }

  public SimilarPaths: IPath[];




  ngOnInit() {
  }

}
