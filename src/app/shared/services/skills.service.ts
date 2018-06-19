import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Skill } from '../classes/skill.model';

export class SkillsService {
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
        Name: 'Angular',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20,
        Img: '../../../../assets/img/skills/js.png'
    },
    {
        ID: 4,
        Name: 'Web Api',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10,
        Img: '../../../../assets/img/skills/js.png'
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
        Name: 'Dynamic HTML',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30,
        Img: '../../../../assets/img/skills/html.png'
    }
];


public getAll(): Skill[] {
    return this.skills.filter(s => s.IsDeleted === false);
}

public getByID(id: number): Skill {
    return this.skills.find(s => s.ID === id);
}

public getAllByPathID(pid: number): Skill[] {
    return this.skills.filter(s => s.ID === pid);
}

}
