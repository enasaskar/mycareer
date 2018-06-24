import { Skill } from './skill.model';

export class Vacancy {
    id: number;
    title?: string;
    description?: string;
    requirements?: string;
    responsabilities?: string;
    postdate: string; // date??
    salary: string;
    availablesnumber?: number;
    isDeleted?: boolean;
    RequiredSkills: Skill[];
    fK_Currency_Id: number;
    fK_Enterprise_Id: number;
    fK_Branch_Id: number;
    fK_VacancyType_Id: number;
    fK_Level_Id: number;

}
