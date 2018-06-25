import { UserService } from './../../../shared/services/user.service';
import { Enterprise } from './../../../shared/classes/enterprise';
import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../../shared/classes/vacancy.model';
import { VacancyService } from '../../../shared/services/vacancy-service';

@Component({
  selector: 'app-enterprise-vacancy-own-item',
  templateUrl: './enterprise-vacancy-own-item.component.html',
  styleUrls: ['./enterprise-vacancy-own-item.component.css']
})
export class EnterpriseVacancyItemOwnComponent implements OnInit {
 @Input() eVacancyItem: Vacancy;
 @Input() e: Enterprise;
 currentId: number;
  uId: number;
  currentUser = null;
  status = false;
  constructor(private userService: UserService, private vacancyService: VacancyService) { }

  ngOnInit() {
    this.uId = this.userService.currentUserId;
    if (this.uId) {
    this.currentUser = this.userService.getUserById(this.uId);
  }
    if (this.userService.currentUserId != null) {
      this.currentId = this.userService.getUserById(this.userService.currentUserId).enterpriseId;
    }
  }
  onTrashClick(id: number) {
    this.vacancyService.deletev(id).subscribe((data: boolean) => this.status = data);
  }
}
