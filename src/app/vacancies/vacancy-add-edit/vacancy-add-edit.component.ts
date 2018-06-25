import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { VacancyLevelService } from '../../shared/services/vacancyLevel-service';
import { VacancyTypeService } from '../../shared/services/vacancyType-service';
import { CurrencyService } from '../../shared/services/currency-service';
import { BranchService } from '../../shared/services/branch-service';
import { IBranch } from '../../shared/interfaces/IBranch';
import { ICurrency } from '../../shared/interfaces/ICurrency';
import { VacancyService } from '../../shared/services/vacancy-service';
import { Vacancy } from '../../shared/classes/vacancy.model';
import { VacancyLevel } from '../../shared/classes/vacancyLevel';
import { VacancyType } from '../../shared/classes/VacancyType';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from '../../shared/services/skills.service';

@Component({
  selector: 'app-vacancy-add-edit',
  templateUrl: './vacancy-add-edit.component.html',
  styleUrls: ['./vacancy-add-edit.component.css']
})
export class VacancyAddEditComponent implements OnInit {

  index: number;
  newvacancy: Vacancy;
  title: string;
  // newvacancy: Vacancy = new Vacancy();
  newvlevel: VacancyLevel = new VacancyLevel();
  newvtype: VacancyType = new VacancyType();
  newcurrency: ICurrency = new ICurrency();
  newbranch: IBranch = new IBranch();

  vlevel: VacancyLevel[];
  vtype: VacancyType[];
  currency: ICurrency[];
  branch: IBranch[];


  constructor(private vacancy: VacancyService, private vlevels: VacancyLevelService,
    private vtypes: VacancyTypeService, private currencies: CurrencyService, private skillServices: SkillsService,
    private branchs: BranchService, private activedRout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.activedRout.snapshot.params['id'];
    console.log(id);
    if (id >= 1) {
      console.log(id);
      this.title = 'Edit';
       this.vacancy.getById(id).subscribe((data: Vacancy) => {
        this.newvacancy = data;
        console.log(this.newvacancy);
      this.vlevel = this.vlevels.getAll();
      this.vtype = this.vtypes.getAll();
      this.currency = this.currencies.getAll();
      this.branch = this.branchs.getAll();

      this.newvlevel = this.vlevels.getById(this.newvacancy.fK_Level_Id);
      this.newvtype = this.vtypes.getById(this.newvacancy.fK_VacancyType_Id);
      this.newcurrency = this.currencies.getById(this.newvacancy.fK_Currency_Id);
      this.newbranch = this.branchs.getById(this.newvacancy.fK_Branch_Id);
      });
    } else {
      this.title = 'Add';
      this.newvacancy = new Vacancy();
      this.vlevel = this.vlevels.getAll();
      this.vtype = this.vtypes.getAll();
      this.currency = this.currencies.getAll();
      this.branch = this.branchs.getAll();
    }

  }
  OnSubmit(form: NgForm) {
    if (form.valid) {
      const id = this.activedRout.snapshot.params['id'];
      console.log(id);
        this.vacancy.getAllWithOrNo().subscribe((s: Vacancy[]) => {
          if (!id) {
           this.newvacancy.id = s.length + 2;
           this.fullData();
           console.log( this.newvacancy);
           this.vacancy.addVacancy(this.newvacancy).subscribe((res) => console.log(res), (err) => console.log(err));
          } else {
            this.newvacancy.id = id;
            this.fullData();
            this.vacancy.updateVacancy(this.newvacancy.id , this.newvacancy).
            subscribe((res) => console.log(res), (err) => console.log(err));

          }
          console.log(this.newvacancy);
        });

      // this.router.navigate(['vacancies']);
      // console.log(this.vacancy.getAll());


    }
  }
  fullData() {
    this.newvacancy.isDeleted = false;
    this.newvacancy.postdate = '2018-12-31';
    this.newvacancy.fK_Branch_Id = this.newbranch.id;
    this.newvacancy.fK_Currency_Id = this.newcurrency.id;
    this.newvacancy.fK_Enterprise_Id = 1;
    this.newvacancy.fK_Level_Id = this.newvlevel.id;
    this.newvacancy.fK_VacancyType_Id = this.newvtype.id;
    this.newvacancy.RequiredSkills = this.skillServices.getAllByPathID(1);
  }
}
