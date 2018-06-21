import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Applicant } from '../classes/applicant.model';
import { User } from '../../users/users.model';
import { Vacancy } from '../classes/vacancy.model';
import { SkillsService } from './skills.service';
import { Skill } from '../classes/skill.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  public onDeleteAccepted = new Subject();

  skills: Skill[];
  applicants: Applicant[];
  constructor(private skillsService: SkillsService) {
    this.skills = this.skillsService.getAll();
    this.applicants = [
      {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Ahmed', 'Adel',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: true
      },
      {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Mohamed', 'Osama',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: true
      }, {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Jhon', 'Doe',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: null
      }, {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Ahmed', 'Yasser',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: null
      }, {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'AbdelRahman', 'Mohamed',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: null
      }, , {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Osama', 'Ahmed',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: null
      }, {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Ahmed', 'Adel',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: true
      },
      {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Mohamed', 'Osama',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: true
      }, {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Ahmed', 'Adel',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: true
      },
      {
        user: new User(0,
          '../../../assets/img/team/emp2.jpg',
          'Mohamed', 'Osama',
          'Web Developer',
          'Company',
          'JoeDoe@gmail.com',
          '12345678'),
        vacancy: {
          id: 1,
          // logoImg: '../../../assets/img/vodafone-icon.png',
          // logoImgbig: '../../../assets/img/vodafone.png',
          title: 'Software Engineer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          requirements: 'bla bla',
          responsabilities: 'bla2 bla2',
          postdate: '2 days',
          salary: '2000',
          isDeleted: false,
          RequiredSkills: [...this.skills],
          fK_Currency_Id: 1,
          fK_Enterprise_Id: 1,
          fK_Branch_Id: 1,
          fK_VacancyType_Id: 1,
          fK_Level_Id: 1
        },
        status: true
      }
    ];
  }

  public add(applicant: Applicant) {
    this.applicants.push(applicant);
  }
  public update() {

  }
  public getAll(): Applicant[] {
    return this.applicants;
  }

  public getAllAccepted(): Applicant[] {
    return this.applicants.filter(a => a.status == true);
  }
  public getAllRejected(): Applicant[] {
    return this.applicants.filter(a => a.status === false);
  }
  public getAllPending(): Applicant[] {
    return this.applicants.filter(a => a.status == null);
  }
  public getByVacancyId(id: number): Applicant[] {
    return this.applicants.filter(a => a.vacancy.id === id);
  }
  public getByEnterpriseId(id: number): Applicant[] {
    return this.applicants.filter(a => a.vacancy.fK_Enterprise_Id === id);
  }

  public getBySearchWord(searchWord: string, id: number) {
    let applicants = [];
    const word = searchWord.toLowerCase();
    if (searchWord.length > 0) {
      applicants = this.getByEnterpriseId(id).filter(a => a.user.fname.toLowerCase().includes(word)
      || a.user.lname.toLowerCase().includes(word) || a.vacancy.title.toLowerCase().includes(word));
    } else {
      applicants = this.getByEnterpriseId(id);
    }
    return applicants;
  }

  public deleteAccepted(applicant: Applicant) {
      const index = this.applicants.indexOf(applicant);
      this.applicants.splice(index, 1);
      console.log('pending is deleted', this.applicants);
  }
}
