// import { Enterprise } from './enterprise';

// export class Vacancy {
//     enterprise: Enterprise;
//     title: string; // like web developer, front end developer ...etc
//     level: string; // like entry level, junior , senior ...etc

//     constructor(enterprise: Enterprise, title: string, level: string) {
//         this.enterprise = enterprise;
//         this.title = title;
//         this.level = level;
//     }
// }

export class Vacancy {
    id: number;
    logoImg?: string;
    logoImgbig?: string;
    title?: string;
    description?: string;
    requirements?: string;
    responsabilities?: string;
    postdate: string; // date??
    salary: string;
    isDeleted?: boolean;
    fK_Currency_Id: number;
    fK_Enterprise_Id: number;
    fK_Branch_Id: number;
    fK_VacancyType_Id: number;
    fK_Level_Id: number;

    constructor () {}
}
