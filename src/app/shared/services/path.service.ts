import { IPath } from '../interfaces/IPath';
import { Skill } from '../classes/skill.model';
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enterprise } from '../classes/enterprise';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PathService {
    constructor( private http: HttpClient) {
    }
    private pathUrl = 'http://localhost:49877/api/path';  // URL to web api
    //  =============================================================================================================
    //  ================================================   DATA   ==================================================
    //  =============================================================================================================
    private path: IPath;
    public isEntPathCreator = new Subject<boolean>();
    public skillAddedToPath = new Subject<Skill>();

    private skills: Skill[] = [
        {
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
        },
    ];
    public allSkills: Skill[] = [
        {
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
        },
        {
            ID: 7,
            Name: 'Interviewing Skills',
            Img: '../../../assets/img/avatar-2.jpg',
            Rate: 3,
            IsDeleted: false,
            Review: 'v.Good',
            NoEndorsments: 50
        },
        {
            ID: 8,
            Img: '../../../assets/img/avatar-2.jpg',
            Name: 'TypeScript',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30
        },
        {
            ID: 9,
            Name: 'AngularJS',
            Img: '../../../assets/img/avatar-2.jpg',
            Rate: 5,
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20
        },
        {
            ID: 10,
            Img: '../../../assets/img/avatar-2.jpg',
            Name: 'Web Api Core',
            Rate: 3,
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10
        },
        {
            ID: 11,
            Name: 'UX',
            Img: '../../../assets/img/avatar-2.jpg',
            Rate: 4,
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50
        },
        {
            ID: 12,
            Name: 'HTML5',
            Img: '../../../assets/img/avatar-2.jpg',
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
            Img: '../../../assets/img/avatar-2.jpg',
            NoEndorsments: 50
        },
        {
            ID: 14,
            Name: 'MVC',
            Rate: 5,
            Img: '../../../assets/img/avatar-2.jpg',
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 30
        },
        {
            ID: 15,
            Name: 'Mongo DB',
            Rate: 5,
            Img: '../../../assets/img/avatar-2.jpg',
            IsDeleted: false,
            Review: 'Excellent',
            NoEndorsments: 20
        },
        {
            ID: 16,
            Name: 'Communication skills',
            Rate: 3,
            Img: '../../../assets/img/avatar-2.jpg',
            IsDeleted: false,
            Review: 'Good',
            NoEndorsments: 10
        },
        {
            ID: 17,
            Name: 'Photoshop',
            Rate: 4,
            Img: '../../../assets/img/avatar-2.jpg',
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 50
        },
        {
            ID: 18,
            Name: 'Dynamic HTML',
            Rate: 4,
            Img: '../../../assets/img/avatar-2.jpg',
            IsDeleted: false,
            Review: 'Very Good',
            NoEndorsments: 30
    }];
    private enetrprises: Enterprise[] = [];
// private enetrprises: Enterprise[] = [
//         {
//             id : 1,
//             name : 'Vodafone',
//             logo : '../assets/img/logos/vodafone.png',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'USA'
//         },

//         {
//             id : 2,
//             name : 'ITWORX',
//             logo : '../assets/img/logos/itworx.jpg',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'Egypt'
//         },
//         {
//             id : 3,
//             name : 'ITWORX',
//             logo : '../assets/img/ITWORX.jpg',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'Egypt'
//         },
//         {
//             id : 4,
//             name : 'ITWORX',
//             logo : '../assets/img/ITWORX.jpg',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'Egypt'
//         },
//         {
//             id : 5,
//             name : 'ITWORX',
//             logo : '../assets/img/ITWORX.jpg',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'Egypt'
//         },
//         {
//             id : 6,
//             name : 'ITWORX',
//             logo : '../assets/img/ITWORX.jpg',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'Egypt'
//         },
//         {
//             id: 7,
//             name: 'Information Technology Institute',
//             logo: '../../../assets/img/school.png',
//             des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//             headquarters : 'Egypt'
//         },
// ];
    public defaultPath: IPath = {
        Id: 0,
        Name: '',
        Description: '',
        // EntPathCreator: "" ,
        ImgURL: '../../../assets/img/avatar-2.jpg',
        NoOfInterestedUsers: 0,
        IsDeleted: false,
        PathMainCategory: {},
        RequiredSkillsCount: 0,
        PathSubCategory: {},
        SimilarPaths: [],
        RequiredSkills: [...this.skills],
        EnterpriseRecommendPath: [ ...this.enetrprises],
    };
    private paths: IPath[] = [];
    private staticpaths: IPath[] = [
        {
            Id: 1,
            Name: 'Computer Network Architect',
            Description: 'Open source networking projects are transforming how service providers and enterprises develop, deploy, and scale their networks and next-generation services. The Open Network Automation Platform (ONAP) project orchestrates and manages physical and virtual network services to bring agility, higher customer satisfaction and lower costs.   ',
            ImgURL: '../../../assets/img/pathlogo/it6.png',
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
            Name: 'Android Development',
            Description: ' Android is the free platform developed by Google, widely used in many devices such as mobile phones, tablets, TV, wearables and the Internet of things. Its expansion has been spectacular, being the S.O. most used today. After completing this course you will learn the basics of Android application development and you will be able to perform simple applications that include the most important and innovative aspects of this platform. ',
            ImgURL: '../../../assets/img/pathlogo/it1.jpg',
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
            EnterpriseRecommendPath: [...this.enetrprises],

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
        const pathArr = this.staticpaths.filter(p => p.IsDeleted === false);
        return pathArr;
    }
    getAllApi (): Observable<IPath[]> {
        return this.http.get<IPath[]>(this.pathUrl);
      }
    public getAllBySearch(searchWord: string): IPath[] {
        // debugger
        let pathArr ;
        // tslint:disable-next-line:max-line-length
        pathArr = this.staticpaths.filter(p => p.IsDeleted === false && p.Name.toLowerCase().includes(searchWord.toLowerCase()) || p.Description.toLowerCase().includes(searchWord.toLowerCase()) || p.PathMainCategory.Name.toLowerCase().includes(searchWord.toLowerCase() ) );
        // console.log(pathArr);
            return pathArr;
    }

    public getAllBySearchApi(searchWord: string):  Observable<IPath[]> {
        // debugger
        // let pathArr ;

        // this.getAllApi().subscribe(data => {
        // tslint:disable-next-line:max-line-length
        //     pathArr = data.filter(p => p.IsDeleted === false && p.Name.toLowerCase().includes(searchWord.toLowerCase()) || p.Description.toLowerCase().includes(searchWord.toLowerCase())  );
        // });
            return  this.http.get<IPath[]>(this.pathUrl + '/' + searchWord);
    }

    public getById(id: number): IPath {
        const path = this.staticpaths.find(i => i.Id == id);
        // console.log( 'path byID = ', path);
        return path;
    }

    getByIdApi (id: number): Observable<IPath> {
        return this.http.get<IPath>(this.pathUrl + '/' + id);
      }

    public getSimilarPaths(id: number): IPath[] {
        // ckeck if they are not deleted first
        return this.similarPaths.filter(p => p.IsDeleted === false);
    }

    public addPatha(path: IPath): number {
        path.Id = this.paths.length + 1;
        this.staticpaths.push(path);
        return path.Id;
    }

    public addPathApi (path: IPath): Observable<IPath> {
        return this.http.post(this.pathUrl, path);
    }

    public edit(path: IPath) {
        // this.paths.find(p => p.Id === path.Id);
        const index = this.staticpaths.indexOf(path);
        if (index !== -1) {
            this.staticpaths[index] = path;
        }
    }

public editApi (path: IPath): Observable<IPath> {
    return this.http.put(this.pathUrl + '/' + path.Id, path);
}

    // public getSkills(pathId: number): Skill[] {
    //     return this.skills;
    // }

    public getSkillsByLevell(pathId: number, levelName: String): Skill[] {
        return this.skills.filter( i => i.Level === levelName);
    }

    public addSkillToPath(skillName: string, levelName: string): boolean {
        // send name to api
        // OR
        // send skill object to api
        // debugger

        return true; // true if succssesfully inserted
    }

    public delete(pathId: number) {
        this.staticpaths.find( p => p.Id === pathId).IsDeleted = true;
    }
    public deleteApi(pathId: number) {
       return this.http.delete<IPath>(this.pathUrl + '/' + pathId );
    }

    public enrollUserToPath(userId: number, pathId: number) {

    }

    public deenrollUserToPath(userId: number, pathId: number) {

    }

    public addEnterpriseRecommendPath (enterpriseId: number, pathId: number) {

    }

    public removeEnterpriseRecommendPath (enterpriseId: number, pathId: number) {

    }

    public getEnterpriseRecommendPath (pathId: number): Enterprise[] {
        // console.log('paths in enterprise =', this.paths);
        const result = this.staticpaths.find( p => p.Id === pathId).EnterpriseRecommendPath;
        // debugger
        console.log('path service', result);
        return result;
    }

    public isPathCreator(userId: number, pathId: number): boolean {
        return true;
    }

    public isAdmin( userId: number): boolean {
        return false;
    }

    public getUserPaths(userID: number) {
        const pathArr = this.staticpaths.filter(p => p.IsDeleted === false).slice(0, 2);
        // console.log(this.paths);
        return pathArr;
    }
}
