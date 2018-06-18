import { IPath } from '../interfaces/IPath';
import { Skill } from '../classes/skill.model';
import { Enterprise } from '../classes/enterprise';
import { Subject } from 'rxjs';

export class PathService {
    constructor() {

    }
    //  =============================================================================================================
    //  ================================================   DATA   ==================================================
    //  =============================================================================================================
    private path: IPath;
    
    private skills: Skill[] = [{
            ID: 1,
            Name: 'C#',
            Img: '../../../assets/img/avatar-2.jpg',
            Description: 'This is a skill for a certain path or a certain person',
            IsDeleted: false,
            Rate: 5,
            Level: 'Intro',
            Review: 'great skill, you should all get it',
            NoEndorsments: 4
        }, {
            ID: 2,
            Name: 'Angular',
            Img: '../../../assets/img/avatar-2.jpg',
            Description: 'This is a skill for a certain path or a certain person',
            IsDeleted: false,
            Rate: 5,
            Level: 'Intermediate',
            Review: 'great skill, you should all get it',
            NoEndorsments: 4
        }, {
            ID: 3,
            Name: 'Time Management',
            Img: '../../../assets/img/avatar-2.jpg',
            Description: 'This is a skill for a certain path or a certain person',
            IsDeleted: false,
            Rate: 5,
            Level: 'Advanced',
            Review: 'great skill, you should all get it',
            NoEndorsments: 4
        }, {
            ID: 4,
            Name: 'OS',
            Img: '../../../assets/img/avatar-2.jpg',
            Description: 'This is a skill for a certain path or a certain person',
            IsDeleted: false,
            Rate: 5,
            Level: 'Intro',
            Review: 'great skill, you should all get it',
            NoEndorsments: 4
        }, {
            ID: 5,
            Name: 'OOP',
            Img: '../../../assets/img/avatar-2.jpg',
            Description: 'This is a skill for a certain path or a certain person',
            IsDeleted: false,
            Rate: 5,
            Level: 'Intro',
            Review: 'great skill, you should all get it',
            NoEndorsments: 4
}];
private enetrprises: Enterprise[] = [
        {
            id : 1,
            name : 'Vodafone',
            logo : '../assets/img/logos/vodafone.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'USA'
        },

        {
            id : 2,
            name : 'ITWORX',
            logo : '../assets/img/logos/itworx.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 3,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 4,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 5,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 6,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id: 7,
            name: 'Information Technology Institute',
            logo: '../../../assets/img/school.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
];
    public defaultPath: IPath = {
        Id: 0,
        Name: '',
        Description: '',
        EntPathCreator: null,
        ImgURL: '../../../assets/img/avatar-2.jpg',
        NoOfInterestedUsers: 0,
        IsDeleted: false,
        PathMainCategory: null,
        RequiredSkillsCount: 0,
        PathSubCategory: null,
        SimilarPaths: [],
        RequiredSkills: [...this.skills],
        EnterpriseRecommendPath:[...this.enetrprises],
    };
    private paths: IPath[] = [
        {
            Id: 1,
            Name: 'Web development',
            Description: 'This is a web path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [...this.skills],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 2,
            Name: 'IOS development',
            Description: 'This is an IOS path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [...this.skills],
            EnterpriseRecommendPath: [...this.enetrprises],

        }, {
            Id: 3,
            Name: 'Android development',
            Description: 'This is an Android path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [...this.skills],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 4,
            Name: 'FrontEnd development',
            Description: 'This is a FrontEnd path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [...this.skills],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 5,
            Name: 'French',
            Description: 'This is a French Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 5,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [...this.skills],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 6,
            Name: 'English for Beginers',
            Description: 'This is a basic English Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 5,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 7,
            Name: 'Arabic',
            Description: 'This is a German Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 15,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 8,
            Name: 'Urdu',
            Description: 'This is a Urdu Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 9,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 9,
            Name: 'Germany',
            Description: 'This is a German Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 5,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 10,
            Name: 'Germany',
            Description: 'This is a German Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 5,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 11,
            Name: 'Germany',
            Description: 'This is a German Language  path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 5,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Languages',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Arts & Culture',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 12,
            Name: 'IOS development',
            Description: 'This is an IOS path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 13,
            Name: 'IOS development',
            Description: 'This is an IOS path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 14,
            Name: 'IOS development',
            Description: 'This is an IOS path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'Arts',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 15,
            Name: 'IOS development',
            Description: 'This is an IOS path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }];

    private similarPaths: IPath[] = [
        {
            Id: 1,
            Name: 'Web development',
            Description: 'This is a web path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 2,
            Name: 'IOS development',
            Description: 'This is an IOS path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }, {
            Id: 3,
            Name: 'Android development',
            Description: 'This is an Android path',
            ImgURL: '../../../assets/img/avatar-2.jpg',
            RequiredSkillsCount: 20,
            IsDeleted: false,
            PathMainCategory: {
                Id: 1,
                Name: 'IT',
                IsDeleted: false
            },
            PathSubCategory: {
                Id: 2,
                Name: 'Software development',
                IsDeleted: false
            },
            EntPathCreator: null,
            NoOfInterestedUsers: 55,
            SimilarPaths: null,
            RequiredSkills: [],
            EnterpriseRecommendPath:[...this.enetrprises],

        }];

   

    //  =============================================================================================================
    //  ================================================ Subjects ==================================================
    //  =============================================================================================================
    public onDelete =  new Subject<IPath>();

    //  =============================================================================================================
    //  ================================================ Functions ==================================================
    //  =============================================================================================================
    public getAll(): IPath[] {
        const pathArr = this.paths.filter(p => p.IsDeleted === false);
        // console.log(this.paths);
        return pathArr;
    }

    public getById(id: number): IPath {
        //   this.path = this.paths.find(i => i.Id == id);
        return this.paths.find(i => i.Id == id);
    }

    public getSimilarPaths(id: number): IPath[] {
        // ckeck if they are not deleted first
        return this.similarPaths.filter(p => p.IsDeleted === false);
    }

    public addPath(path: IPath): number {
        path.Id = this.paths.length + 1;
        this.paths.push(path);
        return path.Id;
    }

    public edit(path: IPath) {
        // this.paths.find(p => p.Id === path.Id);
        const index = this.paths.indexOf(path);
        if (index !== -1) {
            this.paths[index] = path;
        }
    }

    public getSkills(id: number): Skill[] {
        return this.skills;
    }

    public addSkillToPath(skillName: string): boolean {
        // send name to api
        // OR
        // send skill object to api
        this.skills.find(s => s.Name === skillName);
        return true; // true if succssesfully inserted
    }

    public delete(pathId: number) {
        this.paths.find( p => p.Id === pathId).IsDeleted = true;
    }

    public enrollUserToPath(userId: number, pathId: number) {

    }

    public addEnterpriseRecommendPath (enterpriseId: number, pathId: number) {

    }

    public getEnterpriseRecommendPath (pathId: number): Enterprise[] {
        return this.paths.find( p => p.Id === pathId).EnterpriseRecommendPath;
    }
}
