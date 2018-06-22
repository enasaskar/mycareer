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
<<<<<<< HEAD
    // Enterprise_Creator_Id: number;


=======
>>>>>>> 9086a6f0ad6a35290b3025316d413e2f0d717ace
}
