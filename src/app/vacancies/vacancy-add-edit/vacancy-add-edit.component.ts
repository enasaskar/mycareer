import { Component, OnInit } from '@angular/core';
import { IVacancyLevel } from '../../shared/interfaces/IVacancyLevel';
import { VacancyLevelService } from '../../shared/services/vacancyLevel-service';
import { VacancyTypeService } from '../../shared/services/vacancyType-service';
import { CurrencyService } from '../../shared/services/currency-service';
import { BranchService } from '../../shared/services/branch-service';
import { IBranch } from '../../shared/interfaces/IBranch';
import { ICurrency } from '../../shared/interfaces/ICurrency';
import { IVacancyType } from '../../shared/interfaces/IVacancyType';
import { NgForm } from '@angular/forms';
import { IVacancy } from '../../shared/interfaces/IVacancy';
import { VacancyService } from '../../shared/services/vacancy-service';

@Component({
  selector: 'app-vacancy-add-edit',
  templateUrl: './vacancy-add-edit.component.html',
  styleUrls: ['./vacancy-add-edit.component.css']
})
export class VacancyAddEditComponent implements OnInit {
  newvacancy  : IVacancy;
  newvlevel: IVacancyLevel;
  newvtype: IVacancyType;
  newcurrency: ICurrency;
  newbranch: IBranch;

  vlevel: IVacancyLevel[]
  vtype: IVacancyType[]
  currency: ICurrency[]
  branch: IBranch[]

  id : number = 5;

  constructor(private vacancy:VacancyService,private vlevels: VacancyLevelService, private vtypes: VacancyTypeService, private currencies: CurrencyService, private branchs: BranchService) { }

  ngOnInit() {
    this.vlevel = this.vlevels.getAll();
    this.vtype = this.vtypes.getAll();
    this.currency = this.currencies.getAll();
    this.branch = this.branchs.getAll();

  }
  OnSubmit(form : NgForm){
    if(form.valid)
    {
      console.log(this.id);

      this.newvacancy.id = this.id;
      console.log(this.newvacancy.id);

      this.newvacancy.fK_Branch_Id=this.newbranch.id;   
      console.log(this.newvacancy);
 
      this.newvacancy.fK_Currency_Id=this.newcurrency.id;
      console.log(this.newvacancy);

      this.newvacancy.fK_Enterprise_Id=1;
      console.log(this.newvacancy);

      this.newvacancy.fK_Level_Id=this.newvlevel.id;
      console.log(this.newvacancy);

      this.newvacancy.fK_VacancyType_Id=this.newvtype.id;
      console.log(this.newvacancy);

      this.vacancy.addVacancy(this.newvacancy);
      console.log(this.newvacancy);
      console.log(this.vacancy.getAll());
      
      this.id++;
  
    }  }
}
