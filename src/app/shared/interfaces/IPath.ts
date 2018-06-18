import { IPathCategory } from './ICategory';
import { Enterprise } from '../classes/enterprise';
import { Skill } from '../classes/skill.model';

export  interface IPath {
    Id: number;
    Name: string;
    Description: string;
    IsDeleted: boolean;
    ImgURL: string;

    RequiredSkillsCount: number;
    NoOfInterestedUsers: number;

    PathMainCategory: IPathCategory;
    PathSubCategory: IPathCategory;
    EntPathCreator: Enterprise;

    SimilarPaths: IPath[];
    RequiredSkills: Skill[];
    // VacancyRelatedToPath: Vacancy[];
    EnterpriseRecommendPath: Enterprise[];
    // UserFollowPaths: User[];

    

}
