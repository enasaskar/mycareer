import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Skill } from '../classes/skill.model';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

export class SkillsService {
    // public onDelete =  new Subject();
    // onTrashClicked = new EventEmitter<number>();

private skills: Skill[] = [
    {
        ID: 1,
        Name: 'C#',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/cs.jpg'
    },
    {
        ID: 2,
        Name: 'jQuery',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/jquery.png'
    },
    {
        ID: 3,
        Name: 'MVC',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20,
        Img: '../../../../assets/img/skills/mvc.png'
    },
    {
        ID: 4,
        Name: 'SQL',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10,
        Img: '../../../../assets/img/skills/sql.png'
    },
    {
        ID: 5,
        Name: 'Dynamic css',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/css.png'
    },
    {
        ID: 6,
        Name: 'HTML',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/html.png'
    },
    {
        ID: 7,
        Name: 'Bootstrap',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'
    },
    {
        ID: 8,
        Name: 'Angular',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/angular.png'
    },
    {
        ID: 7,
        Name: 'Interviewing Skills',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 8,
        Name: 'TypeScript',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 9,
        Name: 'AngularJS',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 10,
        Name: 'Web Api Core',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 11,
        Name: 'UX',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 12,
        Name: 'HTML5',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 13,
        Name: 'C++',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 14,
        Name: 'MVC',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 15,
        Name: 'Mongo DB',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 16,
        Name: 'Communication skills',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 17,
        Name: 'Photoshop',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50,
        Img: '../../../../assets/img/skills/bootstrap.png'

    },
    {
        ID: 18,
        Name: 'Dynamic HTML',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/bootstrap.png'

    }
];


 getAll(): Skill[] {
    return this.skills;
}

 getByID(id: number): Skill {
    return this.skills.find(s => s.ID === id);
}

 addSkill(skill: Skill) {
    this.skills.push(skill);
}

deleteSkill(skill: number) {
    // this.skills.find(s => s.ID === skill.ID).IsDeleted = true;

    // const index = this.skills.indexOf(this.skills.find(s => s.ID  == skill));
    console.log('skill index service' , skill);
    this.skills.splice(skill, 1);

}

 getAllByPathID(pid: number): Skill[] {
    return this.skills.filter(s => s.ID === pid - 1 + 1);
}
getAllByUserID(uid: number): Skill[] {
return this.skills.splice(1, 3);
}
}
