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



  public Path: IPath;
  public SimilarPaths: IPath[];

  ngOnInit() {
    this.Path.Id = this.route.snapshot.params['id'] || 10;
    console.log(this.route);
    this.Path = this.pathService.getById(this.Path.Id );
  }

}
