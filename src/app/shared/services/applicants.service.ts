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
  skills: Skill[];
  public onDelete = new Subject();
  constructor(private skillsService: SkillsService) {
    this.skills = this.skillsService.getAll();
  }
  applicants: Applicant[] = [
    {
      user: new User(0,
        '../../../assets/img/team/emp2.jpg',
        'Ahmed', 'Adel',
        'Web Developer',
        'Company',
        'JoeDoe@gmail.com',
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        // tslint:disable-next-line:max-line-length
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        // tslint:disable-next-line:max-line-length
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        // tslint:disable-next-line:max-line-length
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        // tslint:disable-next-line:max-line-length
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        // tslint:disable-next-line:max-line-length
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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
        '12345678',
        '01067439936',
        'Heliopolis',
        'Egypt',
        'Cairo',
        'Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus.',
        ['Fusce sit amet orci quis arcu vestibulum vestibulum sed ut felis.',
          'Phasellus in risus quis lectus iaculis vulputate id quis nisl.',
          'Iaculis vulputate id quis nisl.']),
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


  public add() {

  }
  public update() {

  }
  public getAll(): Applicant[] {
    return this.applicants;
  }

  public getAllAccepted(): Applicant[] {
    return this.applicants.filter(a => a.status === true);
  }
  public getAllRejected(): Applicant[] {
    return this.applicants.filter(a => a.status === false);
  }
  public getAllPending(): Applicant[] {
    return this.applicants.filter(a => a.status === null);
  }
  public getByVacancyId(id: number): Applicant[] {
    return this.applicants.filter(a => a.vacancy.id === id);
  }
  public getByEnterpriseId(id: number) {
    return this.applicants.filter(a => a.vacancy.fK_Enterprise_Id === id);
  }

  public getBySearchWord(searchWord: string, status?: boolean) {
    let applicants = [];
    let word = searchWord.toLowerCase();
    switch (status) {
      case true:
        if (searchWord.length > 0) {
          // tslint:disable-next-line:max-line-length
          applicants = this.getAllAccepted().filter(a => a.user.fname.toLowerCase().includes(word) || a.user.lname.toLowerCase().includes(word));
        } else {
          applicants = this.getAllAccepted();
        }
        break;
      case false:
        if (searchWord.length > 0) {
          // tslint:disable-next-line:max-line-length
          applicants = this.getAllRejected().filter(a => a.user.fname.toLowerCase().includes(word) || a.user.lname.toLowerCase().includes(word));
        } else {
          applicants = this.getAllRejected();
        }
        break;
      case null:
        if (searchWord.length > 0) {
          // tslint:disable-next-line:max-line-length
          applicants = this.getAllPending().filter(a => a.user.fname.toLowerCase().includes(word) || a.user.lname.toLowerCase().includes(word) || a.vacancy.title.toLowerCase().includes(word));
        } else {
          applicants = this.getAllPending();
        }
        break;
    }
    return applicants;
  }

  public delete(applicant: Applicant) {
    const index = this.applicants.indexOf(applicant);
    this.applicants.splice(index, 1);
    console.log('pending is deleted', this.applicants);
  }
}
