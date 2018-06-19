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
        NoEndorsments: 50
    },
    {
        ID: 2,
        Name: 'JavaScript',
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


public getAll(): Skill[] {
    return this.skills.filter(s => s.IsDeleted === false);
}

public getByID(id: number): Skill {
    return this.skills.find(s => s.ID === id);
}
}
