import { UserService } from './../../../shared/services/user.service';
import { Enterprise } from './../../../shared/classes/enterprise';
import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../../shared/classes/vacancy.model';

@Component({
  selector: 'app-enterprise-vacancy-item',
  templateUrl: './enterprise-vacancy-item.component.html',
  styleUrls: ['./enterprise-vacancy-item.component.css']
})
export class EnterpriseVacancyItemComponent implements OnInit {
 @Input() eVacancyItem : Vacancy;
 @Input() e : Enterprise;
 currentId: number;
  constructor(private userService : UserService) { }

  ngOnInit() {
    if(this.userService.currentUserId != null){
      this.currentId = this.userService.getUserById(this.userService.currentUserId).enterpriseId;
    }
  }

}
