import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../../shared/classes/vacancy.model';
import { Enterprise } from '../../../shared/classes/enterprise';
import { VacancyService } from '../../../shared/services/vacancy-service';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacancy-item',
  templateUrl: './vacancy-item.component.html',
  styleUrls: ['./vacancy-item.component.css']
})
export class VacancyItemComponent implements OnInit {
 @Input() vacancyitem: Vacancy;
 @Input() enterprises: Enterprise[];
 @Input() index: number;
  vid: any;
  constructor(private vacancyService: VacancyService, private userService: UserService ,
     private activeRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    // this.activeRoute.params.subscribe((params) => { this.vid = params['id'] ; } );
  }
  onClickMoreDetails(id: number) {
    debugger
    
    console.log(id);
    this.router.navigate(['vacancies/vacancydetails/', id]);
    console.log(this.activeRoute.pathFromRoot.toString()); // Object {}
  }
  onTrashClick(id: number) {
    this.vacancyService.deletev(id);
  }
}
