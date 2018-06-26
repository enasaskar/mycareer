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
    skillOnUpdate = new Subject<Skill>();


constructor() {
    this.skills = [
        {
            ID: 0,
            Name: 'C#',
            Rate: 0,
            IsDeleted: false,
            Review: 'v.Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/cs.jpg',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        {
            ID: 1,
            Name: 'jQuery',
            Rate: 0,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/jquery.png',
            acquiredDat: '3/8/2016',
            from: 'Ain shams Univercity'
        },
        {
            ID: 2,
            Name: 'MVC',
            Rate: 0,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20,
            Img: '../../../../assets/img/skills/mvc.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        {
            ID: 3,
            Name: 'SQL',
            Rate: 0,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10,
            Img: '../../../../assets/img/skills/sql.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        {
            ID: 4,
            Name: 'Dynamic css',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/css.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        {
            ID: 5,
            Name: 'HTML',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/html.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        {
            ID: 6,
            Name: 'Bootstrap',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/bootstrap.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        {
            ID: 7,
            Name: 'Angular',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/angular.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'
        },
        // {
        //     ID: 8,
        //     Name: 'Interviewing Skills',
        //     Rate: 0,
        //     IsDeleted: false,
        //     Review: 'v.Good',
        //     NoEndorsments: 50,
        //     Img: '../../../../assets/img/skills/interview.png',
        //     acquiredDat: '6/10/2018',
        //     from: 'Cairo Univercity'

        // },
        {
            ID: 8,
            Name: 'TypeScript',
            Rate: 0,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/Typescript_logo.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 9,
            Name: 'AngularJS',
            Rate: 0,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20,
            Img: '../../../../assets/img/skills/angularJs.jpg',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 10,
            Name: 'Web Api Core',
            Rate: 0,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10,
            Img: '../../../../assets/img/skills/apiCore.jpg',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 11,
            Name: 'web api',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/apiCore.jpg',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 12,
            Name: 'HTML5',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/html.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 13,
            Name: 'C++',
            Rate: 0,
            IsDeleted: false,
            Review: 'v.Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/c++.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 14,
            Name: 'MVC',
            Rate: 0,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/mvc.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 15,
            Name: 'Mongo DB',
            Rate: 0,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20,
            Img: '../../../../assets/img/skills/mongodb.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 16,
            Name: 'Communication skills',
            Rate: 0,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10,
            Img: '../../../../assets/img/skills/Communication-Skills2.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 17,
            Name: 'Photoshop',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50,
            Img: '../../../../assets/img/skills/PS.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        },
        {
            ID: 18,
            Name: 'Dynamic HTML',
            Rate: 0,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30,
            Img: '../../../../assets/img/skills/html.png',
            acquiredDat: '6/10/2018',
            from: 'Cairo Univercity'

        }
    ];
    this.pathSkills = [
       {
           ID: 0,
           Name: 'SQL',
           Rate: 0,
           IsDeleted: false,
           Review: 'Good',
           Level: 'Intro',
           NoEndorsments: 10,
           Img: '../../../../assets/img/skills/sql.png'
       },
       {
           ID: 1,
           Name: 'Dynamic css',
           Rate: 0,
           IsDeleted: false,
           Review: 'Very Good',
           Level: 'Advanced',
           NoEndorsments: 50,
           Img: '../../../../assets/img/skills/css.png'
       },
       {
           ID: 2,
           Name: 'HTML',
           Rate: 0,
           IsDeleted: false,
           Level: 'Intermediate',
           Review: 'Very Good',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/html.png'
       },
       {
           ID: 3,
           Name: 'Bootstrap',
           Rate: 0,
           IsDeleted: false,
           Level: 'Intermediate',

           Review: 'Very Good',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/bootstrap.png'
       },
       {
           ID: 4,
           Name: 'Angular',
           Rate: 0,
           Level: 'Intermediate',
           IsDeleted: false,
           Review: 'Very Good',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/angular.png'
       },
       {
           ID: 5,
           Name: 'TypeScript',
           Rate: 0,
           Level: 'Intro',
           IsDeleted: false,
           Review: 'Excellent',
           NoEndorsments: 30,
           Img: '../../../../assets/img/skills/Typescript_logo.png'

       },
       {
        ID: 6,
        Name: 'EcmaScript',
        Rate: 0,
        Level: 'Advanced',
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 7,
        Name: 'React',
        Rate: 0,
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
        Rate: 0,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/cs.jpg',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 1,
        Name: 'jQuery',
        Rate: 0,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/jquery.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 2,
        Name: 'MVC',
        Rate: 0,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20,
        Img: '../../../../assets/img/skills/mvc.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 3,
        Name: 'SQL',
        Rate: 0,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10,
        Img: '../../../../assets/img/skills/sql.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 4,
        Name: 'Dynamic css',
        Rate: 0,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/css.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 5,
        Name: 'HTML',
        Rate: 0,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/html.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 6,
        Name: 'Bootstrap',
        Rate: 0,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    },
    {
        ID: 7,
        Name: 'Angular',
        Rate: 0,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/angular.png',
        acquiredDat: '6/10/2018',
        from: 'Cairo Univercity'
    }
    // {
    //     ID: 8,
    //     Name: 'Interviewing Skills',
    //     Rate: 0,
    //     IsDeleted: false,
    //     Review: 'v.Good',
    //     NoEndorsments: 50,
    //     Img: '../../../../assets/img/skills/interview.png',
    //     acquiredDat: '6/10/2018',
    //     from: 'Cairo Univercity'

    // }
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
deleteSkillFromPath(id: number) {
    this.pathSkills.splice(id, 1);

}
updatePathSkill(skillIndex, newSkill) {
    this.pathSkills[skillIndex] = newSkill;
}
///////////// -------------------------USER-------------------------/////////////
getAllByUserID(uid: number): Skill[] {
return this.userSkills;
}
addNewSkillToUser(skill: Skill) {
skill.ID = this.userSkills.length + 1 ;
this.userSkills.push(skill);
}
deleteSkillFromUser(id: number) {
    this.userSkills.splice(id, 1);

}
updateUSerSkill(skillIndex, newSkill) {
    this.userSkills[skillIndex] = newSkill;
}
}
