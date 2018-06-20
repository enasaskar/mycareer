import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Skill } from '../classes/skill.model';
import { Subject } from 'rxjs';

export class SkillsService {
    public onDelete =  new Subject();

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
        NoEndorsments: 30
    },
    {
        ID: 7,
        Name: 'Interviewing Skills',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50
    },
    {
        ID: 8,
        Name: 'TypeScript',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30
    },
    {
        ID: 9,
        Name: 'AngularJS',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20
    },
    {
        ID: 10,
        Name: 'Web Api Core',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10
    },
    {
        ID: 11,
        Name: 'UX',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50
    },
    {
        ID: 12,
        Name: 'HTML5',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30
    },
    {
        ID: 13,
        Name: 'C++',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50
    },
    {
        ID: 14,
        Name: 'MVC',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30
    },
    {
        ID: 15,
        Name: 'Mongo DB',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20
    },
    {
        ID: 16,
        Name: 'Communication skills',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10
    },
    {
        ID: 17,
        Name: 'Photoshop',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50
    },
    {
        ID: 18,
        Name: 'Dynamic HTML',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30
    }
];


 getAll(): Skill[] {
    return this.skills.filter(s => s.IsDeleted === false);
}

 getByID(id: number): Skill {
    return this.skills.find(s => s.ID === id);
}

 addSkill(skill: Skill) {
    this.skills.push(skill);
}

deleteSkill(id: number) {
    this.skills.find(s => s.ID === id).IsDeleted = true;
}

 getAllByPathID(pid: number): Skill[] {
    return this.skills.filter(s => s.ID === pid - 1 + 1);
}

}
