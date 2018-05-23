import { IPath } from '../interfaces/IPath';

export class PathService {
    constructor() {

    }
    private paths: IPath[] = [{
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

    }];

    public getAll (): IPath[]  {
        const pathArr = this.paths.filter( p => p.IsDeleted === false);
        console.log(this.paths);
        return pathArr;
    }
}
