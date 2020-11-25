import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Applicant } from '../classes/applicant.model';
import { User } from '../../users/users.model';
import { Vacancy } from '../classes/vacancy.model';
import { SkillsService } from './skills.service';
import { Skill } from '../classes/skill.model';
import { UserService } from './user.service';
import { VacancyService } from './vacancy-service';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  public onDelete = new Subject();
  public onUpdate = new Subject();
 
  skills: Skill[] = this.skillsService.getAll();
  user:User[] = this.userService.getUsers();
  applicants: Applicant[] =[
    {
      user:this.user[0],
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
    },
    {
      user:this.user[1],
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
      user: this.user[2],
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
      user: this.user[3],
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
    },
    {
      user: this.user[4],
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
    },
    {
      user: this.user[5],
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
    },
    {
      user: this.user[6],
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
    },
    {
      user: this.user[7],
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
    }
  ];
    
  constructor(private skillsService: SkillsService,private userService:UserService,private vacancyService:VacancyService) {
  }

  public add(applicant: Applicant) {
    this.applicants.push(applicant);
    this.getAll();
  }
  public update(applicant:Applicant) {
    applicant.status = true;
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
    return this.applicants.filter(a => a.vacancy.fK_Enterprise_Id == id);
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

  public delete(applicant: Applicant) {
     applicant.status = false;  
  }

}
