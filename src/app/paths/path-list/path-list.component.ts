import { Component, OnInit } from '@angular/core';
import { PathCategoryService } from '../../shared/services/PathCategory.service';
import { IPathCategory } from '../../shared/interfaces/ICategory';
import { IPath } from '../../shared/interfaces/IPath';
import { PathService } from '../../shared/services/path.service';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {



  public PathCategories: IPathCategory[];
  public paths: IPath[] = [];
    constructor(private pathCategoryService: PathCategoryService,
      private pathService: PathService) {
        pathService.onDelete.subscribe(
          (p: IPath) => {
            // pathService.delete(p.Id);
            pathService.deleteApi(p.Id).subscribe( path => {
              console.log('path deleted =', path);
                this.pathService.getAllApi().subscribe( data => {
                  this.paths = data;
                  console.log( ' data in ondelete = ', data);
                });
            });
          }
        );
      }

  ngOnInit() {
    this.PathCategories = this.pathCategoryService.getAll();

    this.pathService.getAllApi().subscribe( data => {
      this.paths = data;
      // console.log( ' data in ngOninit = ', data);
      console.log( ' this.paths in ngOninit = ', this.paths);
    });
  }

  public getAll(searchWord: string) {
    // this.paths = this.pathService.getAllBySearch(searchWord);
    this.pathService.getAllApi().subscribe(data => {
        // tslint:disable-next-line:max-line-length
        this.paths = data.filter(p => p.IsDeleted === false && p.Name.toLowerCase().includes(searchWord.toLowerCase()) || p.Description.toLowerCase().includes(searchWord.toLowerCase())  );
        });
  }

}
