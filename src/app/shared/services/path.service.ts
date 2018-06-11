import { IPath } from '../interfaces/IPath';
import { Skill } from '../classes/skill.model';

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

        }];

   

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
        return this.similarPaths;
    }

    public addPath(path: IPath): number {
        path.Id = this.paths.length + 1;
        this.paths.push(path);
        return path.Id;
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
}
