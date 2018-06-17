import { Component, OnInit, Input } from '@angular/core';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.css']
})
export class PathItemComponent implements OnInit {



  @Input() Path: IPath;
  constructor(private pathService: PathService) { }

  ngOnInit() {
  }

  public trashClicked() {
    this.pathService.onDelete.next(this.Path);
  }

}
