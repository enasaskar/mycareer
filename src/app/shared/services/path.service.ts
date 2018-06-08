import { IPath } from '../interfaces/IPath';

export class PathService {
    constructor() {

    }
    private path: IPath ;
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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

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
            NoOfInterestedUsers: 55

        }];

    public getAll(): IPath[] {
        const pathArr = this.paths.filter(p => p.IsDeleted === false);
        console.log(this.paths);
        return pathArr;
    }

    public getById(id: number): IPath {
    //   this.path = this.paths.find(i => i.Id == id);
        return this.paths.find(i => i.Id == id);
    }
}
