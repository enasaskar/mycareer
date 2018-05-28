import { ISkill } from '../interfaces/iskill' ;
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

export class SkillsService {
private skills: ISkill[] = [
    {
        ID: 1,
        Name: 'C#',
        Rate: 3,
        IsDeleted: false,
        Review: 'v.Good',
        NoEndorsments: 50
    },
    {
        ID: 2,
        Name: 'JAvaScript',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 30
    },
    {
        ID: 3,
        Name: 'Angular',
        Rate: 5,
        IsDeleted: false,
        Review: 'Excellent',
        NoEndorsments: 20
    },
    {
        ID: 4,
        Name: 'Web Api',
        Rate: 3,
        IsDeleted: false,
        Review: 'Good',
        NoEndorsments: 10
    },
    {
        ID: 5,
        Name: 'Dynamic css',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 50
    },
    {
        ID: 6,
        Name: 'Dynamic HTML',
        Rate: 4,
        IsDeleted: false,
        Review: 'Very Good',
        NoEndorsments: 30
    }
];


public getAll(): ISkill[] {
    return this.skills.filter(s => s.IsDeleted === false);
}

public getByID(id: number): ISkill {
    return this.skills.find(s => s.ID === id);
}
}
