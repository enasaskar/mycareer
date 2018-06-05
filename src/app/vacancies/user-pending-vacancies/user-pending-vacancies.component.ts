import { Component, OnInit, Input } from '@angular/core';
import { EnterpriseService } from '../../shared/services/enterprise.service';

@Component({
  selector: 'app-user-pending-vacancies',
  templateUrl: './user-pending-vacancies.component.html',
  styleUrls: ['./user-pending-vacancies.component.css']
})
export class UserPendingVacanciesComponent implements OnInit {

  @Input() userPendingVacancies;
  private enterprises = [];
  constructor(private enterpriseSevice: EnterpriseService) {}

  ngOnInit() {
    this.userPendingVacancies.map(vacancy => {
      const enterprise = this.enterpriseSevice.getEnterpriseById(vacancy.fK_Enterprise_Id);
      this.enterprises.push(enterprise);
    });
  }

}
