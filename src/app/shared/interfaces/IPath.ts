import { IPathCategory } from './ICategory';
import { Enterprise } from '../classes/enterprise';

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
    // RequiredSkills: ISkills[];
    // VacancyRelatedToPath: Vacancy[];
    // EnterpriseRecommendPath: Enterprise[];
    // UserFollowPaths: User[];

    

}
