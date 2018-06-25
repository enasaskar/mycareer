import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Skill } from '../classes/skill.model';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { SkillDetailsEditComponent } from '../../skills/skill-details-edit/skill-details-edit.component';
import { Observable } from 'rxjs/internal/Observable';

export class SkillsService {
    // public onDelete =  new Subject();
    // onTrashClicked = new EventEmitter<number>();
    editing = new Subject<number>();
    private skills: Skill[];
     pathSkills: Skill[];
    private userSkills: Skill[];
    skillChanged = new Subject<Skill[]>();
    skillAddedPath = new Subject<Skill>();
    skillAddedUser = new Subject<Skill>();


constructor() {
    this.skills = [
        {
            ID: 0,
            Name: 'C#',
            Rate: 3,
            IsDeleted: false,
            Review: 'v.Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/cs.jpg'
        },
        {
            ID: 1,
            Name: 'jQuery',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/jquery.png'
        },
        {
            ID: 2,
            Name: 'MVC',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20,
            Img: '../../../../assets/img/skills/mvc.png'
        },
        {
            ID: 3,
            Name: 'SQL',
            Rate: 3,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10,
            Img: '../../../../assets/img/skills/sql.png'
        },
        {
            ID: 4,
            Name: 'Dynamic css',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/css.png'
        },
        {
            ID: 5,
            Name: 'HTML',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/html.png'
        },
        {
            ID: 6,
            Name: 'Bootstrap',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/bootstrap.png'
        },
        {
            ID: 7,
            Name: 'Angular',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/angular.png'
        },
        {
            ID: 8,
            Name: 'Interviewing Skills',
            Rate: 3,
            IsDeleted: false,
            Review: 'v.Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 9,
            Name: 'TypeScript',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 10,
            Name: 'AngularJS',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 11,
            Name: 'Web Api Core',
            Rate: 3,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 12,
            Name: 'UX',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 13,
            Name: 'HTML5',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 14,
            Name: 'C++',
            Rate: 3,
            IsDeleted: false,
            Review: 'v.Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 15,
            Name: 'MVC',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 16,
            Name: 'Mongo DB',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 17,
            Name: 'Communication skills',
            Rate: 3,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 18,
            Name: 'Photoshop',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/bootstrap.png'

        },
        {
            ID: 19,
            Name: 'Dynamic HTML',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/bootstrap.png'

        }
    ];
    this.pathSkills = [
       {
           ID: 0,
           Name: 'SQL',
           Rate: 3,
           IsDeleted: false,
           Review: 'Good',
           Level: 'Intro',
           NoEndorsments: 10,
           Img: '../../../../assets/img/skills/sql.png'
       },
       {
           ID: 1,
           Name: 'Dynamic css',
           Rate: 4,
           IsDeleted: false,
           Review: 'Very Good',
           Level: 'Advanced',
           NoEndorsments: 50,
           Img: '../../../../assets/img/skills/css.png'
       },
       {
           ID: 2,
           Name: 'HTML',
           Rate: 4,
           IsDeleted: false,
           Level: 'Intermediate',
           Review: 'Very Good',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/html.png'
       },
       {
           ID: 3,
           Name: 'Bootstrap',
           Rate: 4,
           IsDeleted: false,
           Level: 'Intermediate',

           Review: 'Very Good',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/bootstrap.png'
       },
       {
           ID: 4,
           Name: 'Angular',
           Rate: 4,
           Level: 'Intermediate',
           IsDeleted: false,
           Review: 'Very Good',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/angular.png'
       },
       {
           ID: 5,
           Name: 'Interviewing Skills',
           Rate: 3,
           Level: 'Intro',
           IsDeleted: false,
           Review: 'v.Good',
           NoEndorsments: 50,
           Img: '../../../../assets/img/skills/bootstrap.png'

       },
       {
           ID: 6,
           Name: 'TypeScript',
           Rate: 5,
           Level: 'Intro',
           IsDeleted: false,
           Review: 'Excellent',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/bootstrap.png'

       },
       {
        ID: 7,
        Name: 'EcmaScript',
        Rate: 5,
        Level: 'Advanced',
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 8,
        Name: 'React',
        Rate: 5,
        Level: 'Advanced',
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    }
    ];

this.userSkills = [
    {
        ID: 0,
        Name: 'C#',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/cs.jpg'
    },
    {
        ID: 1,
        Name: 'jQuery',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/jquery.png'
    },
    {
        ID: 2,
        Name: 'MVC',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20,
        Img: '../../../../assets/img/skills/mvc.png'
    },
    {
        ID: 3,
        Name: 'SQL',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10,
        Img: '../../../../assets/img/skills/sql.png'
    },
    {
        ID: 4,
        Name: 'Dynamic css',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/css.png'
    },
    {
        ID: 5,
        Name: 'HTML',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/html.png'
    },
    {
        ID: 6,
        Name: 'Bootstrap',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'
    },
    {
        ID: 7,
        Name: 'Angular',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/angular.png'
    },
    {
        ID: 8,
        Name: 'Interviewing Skills',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/bootstrap.png'

    }
];
}

 getAll(): Skill[] {
    return this.skills;
    // return this.skillChanged.startWith(this.skills.slice());
}
getAllNotDeleted() {
// return this.skills.filter(a => a.IsDeleted === false);
return this.skills.filter(a => a.IsDeleted === false).slice();
}
getByID(id: number): Skill {
    return this.skills.find(s => s.ID === id);
}
getByName(skillName: string): Skill {
    return this.skills.find(s => s.Name === skillName);
}
getSkill(index: number) {
return this.skills[index];
}

 addSkill(skill: Skill) {
     skill.ID = this.skills.length + 1;
    this.skills.push(skill);
}


deleteSkill(skillID: number) {
    // this.skills.find(s => s.ID === skillID).IsDeleted = true;
    // console.log('skill index service bbolean' , this.getByID(skillID).IsDeleted);
    // return this.getAllNotDeleted();

    console.log('skill index service' , skillID);
    // const index = this.skills.indexOf(this.skills.find(s => s.ID  == skill));
    this.skills.splice(skillID, 1);

}

updateSkill(skillIndex, newSkill) {
    this.skills[skillIndex] = newSkill;
}
updateSkill2(newSkill: Skill) {
const toUpdate = this.getByID(newSkill.ID);
toUpdate.acquiredDat = newSkill.acquiredDat;
toUpdate.from = newSkill.from;
toUpdate.vacancy = newSkill.vacancy;
toUpdate.paths = newSkill.paths;

}

///////////// -------------------------PATH-------------------------/////////////
deletePathSkill(pathSkill: number) {
    this.pathSkills.splice(pathSkill, 1);
}

 getAllByPathID(pid: number): Skill[] {
    // return this.skills.filter(s => s.ID === pid - 1 + 1);
    // this.skillAddedPath.subscribe(skillAdded => {
    //     this.pathSkills.push(skillAdded);
    // });
    // console.log(this.pathSkills);
    return this.pathSkills;
}
addSkilltoPath(skill: Skill) {
    skill.ID = this.pathSkills.length + 1;
   this.pathSkills.push(skill);
}

///////////// -------------------------USER-------------------------/////////////
getAllByUserID(uid: number): Skill[] {
return this.userSkills;
}
addNewSkillToUser(skill: Skill) {
skill.ID = this.userSkills.length + 1 ;
this.userSkills.push(skill);
}
}
