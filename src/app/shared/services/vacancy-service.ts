import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';


import { Vacancy } from '../classes/vacancy.model';
import { EnterpriseService } from './enterprise.service';
import { SkillsService } from './skills.service';
import { Skill } from '../classes/skill.model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class VacancyService {
    UrlApigetAllWithOrNo = 'http://localhost:49877/rpc/vacancies/getAllWithOrNo';
    UrlApiGetAll = 'http://localhost:49877/api/vacancies?searchInput=%20&type=json';
    UrlApiGetById = 'http://localhost:49877/api/Vacancies?id=';
    UrlApiGetVacanciesByEnterpriseId = 'http://localhost:49877/api/Vacancies/Eneterprise?id=';
    UrlApiAdd = 'http://localhost:49877/api/Vacancies?vacancyAddEditDTO=';
    UrlApiDelete = 'http://localhost:49877/api/vacancies/DeleteVacancy?id=';
    skills: Skill[];
    vacanciesFromApi: Subject<Vacancy[]>;
    public vacanciesChanged: Subject<Vacancy[]>;
    private vacancies: Vacancy[];
    vac: Vacancy;
    constructor(private enterpriseServices: EnterpriseService, private skillsService: SkillsService, private http: HttpClient) {
        this.vacanciesChanged = new Subject();
        this.skills = this.skillsService.getAll();
        this.vacancies = [
            {
                id: 1,
                title: 'Senior ASP.NET / MVC',
                description: `Ability to collaborate closely with UX designers, UI developers, copywriters, and Business Analysts.
             Ability to translate the UX designers’ visions and user journeys into reality
              with immpressive and attractive designes keeping in mind the industry’s standards.
             Ability to present and defend your design decisions. All your design decisions
             should be based on the overall design roadmap as well as your own design thinking and fundamental`,
                requirements: `Bachelor’s degree in Computer Science or a related discipline.
           Good Experience in VS 2013, VS 2017.
           Good Experience of ASP.NET MVC, Web APIs.
           Good Experience of ORM tools like Entity framework.
           Robust knowledge of Frontend Development (HTML5, CSS3, JavaScript, JSON, Bootstrap, Responsive Designs).
           Proficiency writing SQL queries, Stored Procedures, Triggers, and relational database concepts.
           Strong understanding of OOP principles and enterprise design patterns.
           Good Knowledge of Angular.`,
                responsabilities: 'bla2 bla2',
                postdate: '2 days',
                salary: '2000',
                RequiredSkills: [...this.skills],
                isDeleted: false,
                availablesnumber: 2,
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 1,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 1,
                fK_Level_Id: 1
            },
            {
                id: 2,
                title: 'UI / Web Designer',
                description: `Ability to collaborate closely with UX designers, UI developers, copywriters, and Business Analysts.
            Ability to translate the UX designers’ visions and user journeys into reality
             with immpressive and attractive designes keeping in mind the industry’s standards.
            Ability to present and defend your design decisions. All your design decisions
            should be based on the overall design roadmap as well as your own design thinking and fundamental `,
                requirements: `3+ years of experience and proven track record.
            Professioncy working for both web and mobile design and strong UX understanding of diﬀerent platforms.
            Strong portfolio to be presented and defended during interview.
            Proﬁciency using tools such as Photoshop, Illustrator, and other designing tools.
            Basic understanding of HTML5, CSS3, and Javascript.
            Creative ideas with problem solving mindset.`,
                responsabilities: `Entry Level · 1+ Yrs of Exp · UI · UX · Web Development
            · Web Design · Information Technology (IT) · HTML5 · CSS3 · CSS · LESS · SASS `,
                postdate: '4 days',
                salary: '4000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 2,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 2,
                fK_Level_Id: 2
            },
            {
                id: 3,
                title: 'UI/UX Web Developer',
                description: `We are looking for a Front-End Web Developer who is motivated to combine the art of
            design with the art of programming. Responsibilities will include translation of the UI/UX design
            wireframes to actual code that will produce visual elements of the application. You will work with the
             UI/UX designer and bridge the gap between graphical design and technical implementation,
            taking an active role on both sides and defining how the application looks as well as how it works.`,
                requirements: `Develop new user-facing features.
            Build reusable code and libraries for future use.
            Ensure the technical feasibility of UI/UX designs.
            Optimize application for maximum speed and scalability.
            Assure that all user input is validated before submitting to back-end.
            Collaborate with other team members and stakeholders.`,
                responsabilities: `Experienced (Non-Manager) · 3+ Yrs of Exp · 2 Vacancies · Creative/Design/Art ·`,
                postdate: '6 days',
                salary: '4000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 2,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 1,
                fK_Level_Id: 2
            },
            {
                id: 4,
                title: 'Front End Web & UX Developer',
                description: `We are looking for a Front-End Web/UX Developer who is
             motivated to combine the art of design with the art of programming.
              Responsibilities will include translation of the UI/UX design wireframes to actual code that
               will produce visual elements of the
             application. The office is in the Greek Campus.`,
                requirements: `Proficient understanding of web markup, including HTML5, CSS3,JS
            Good Understating of Photoshop and how to create visual elements
            Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS
            Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery
            Good understanding of Meteor.js/Express.js
            Good understanding of asynchronous request handling, partial page updates, and AJAX
            Good understanding of mobile UX/UI for iOS & Android.
            Basic knowledge of image authoring tools, to be able to crop, resize,
             or perform small adjustments on an image. Familiarity with tools such as as Gimp or Photoshop is a plus.
            Proficient understanding of cross-browser compatibility issues and ways to work around them.
            Proficient understanding of code versioning tools, such as GIT`,
                responsabilities: `Develop new user-facing features
            Build reusable code and libraries for future use
            Creative UX designer
            Ensure the technical feasibility of UI/UX designs for Web & Mobile
            Optimize application for maximum speed and scalability
            Assure that all user input is validated before submitting to back-end`,
                postdate: '4 days',
                salary: '5000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 1,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 2,
                fK_Level_Id: 1
            }
            ,
            {
                id: 5,
                title: 'Front End Web & UX Developer',
                description: `We are looking for a Front-End Web/UX Developer who is
             motivated to combine the art of design with the art of programming.
              Responsibilities will include translation of the UI/UX design wireframes to actual code that
               will produce visual elements of the
             application. The office is in the Greek Campus.`,
                requirements: `Proficient understanding of web markup, including HTML5, CSS3,JS
            Good Understating of Photoshop and how to create visual elements
            Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS
            Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery
            Good understanding of Meteor.js/Express.js
            Good understanding of asynchronous request handling, partial page updates, and AJAX
            Good understanding of mobile UX/UI for iOS & Android.
            Basic knowledge of image authoring tools, to be able to crop, resize,
             or perform small adjustments on an image. Familiarity with tools such as as Gimp or Photoshop is a plus.
            Proficient understanding of cross-browser compatibility issues and ways to work around them.
            Proficient understanding of code versioning tools, such as GIT`,
                responsabilities: `Develop new user-facing features
            Build reusable code and libraries for future use
            Creative UX designer
            Ensure the technical feasibility of UI/UX designs for Web & Mobile
            Optimize application for maximum speed and scalability
            Assure that all user input is validated before submitting to back-end`,
                postdate: '20 days',
                salary: '5000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 1,
                fK_Branch_Id: 2,
                fK_VacancyType_Id: 1,
                fK_Level_Id: 1
            },
            {
                id: 6,
                title: 'Front End Web & UX Developer',
                description: `We are looking for a Front-End Web/UX Developer who is
             motivated to combine the art of design with the art of programming.
              Responsibilities will include translation of the UI/UX design wireframes to actual code that
               will produce visual elements of the
             application. The office is in the Greek Campus.`,
                requirements: `Proficient understanding of web markup, including HTML5, CSS3,JS
            Good Understating of Photoshop and how to create visual elements
            Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS
            Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery
            Good understanding of Meteor.js/Express.js
            Good understanding of asynchronous request handling, partial page updates, and AJAX
            Good understanding of mobile UX/UI for iOS & Android.
            Basic knowledge of image authoring tools, to be able to crop, resize,
             or perform small adjustments on an image. Familiarity with tools such as as Gimp or Photoshop is a plus.
            Proficient understanding of cross-browser compatibility issues and ways to work around them.
            Proficient understanding of code versioning tools, such as GIT`,
                responsabilities: `Develop new user-facing features
            Build reusable code and libraries for future use
            Creative UX designer
            Ensure the technical feasibility of UI/UX designs for Web & Mobile
            Optimize application for maximum speed and scalability
            Assure that all user input is validated before submitting to back-end`,
                postdate: '20 days',
                salary: '7000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 2,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 1,
                fK_Level_Id: 1
            },
            {
                id: 7,
                title: 'Front End Web & UX Developer',
                description: `We are looking for a Front-End Web/UX Developer who is
             motivated to combine the art of design with the art of programming.
              Responsibilities will include translation of the UI/UX design wireframes to actual code that
               will produce visual elements of the
             application. The office is in the Greek Campus.`,
                requirements: `Proficient understanding of web markup, including HTML5, CSS3,JS
            Good Understating of Photoshop and how to create visual elements
            Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS
            Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery
            Good understanding of Meteor.js/Express.js
            Good understanding of asynchronous request handling, partial page updates, and AJAX
            Good understanding of mobile UX/UI for iOS & Android.
            Basic knowledge of image authoring tools, to be able to crop, resize,
             or perform small adjustments on an image. Familiarity with tools such as as Gimp or Photoshop is a plus.
            Proficient understanding of cross-browser compatibility issues and ways to work around them.
            Proficient understanding of code versioning tools, such as GIT`,
                responsabilities: `Develop new user-facing features
            Build reusable code and libraries for future use
            Creative UX designer
            Ensure the technical feasibility of UI/UX designs for Web & Mobile
            Optimize application for maximum speed and scalability
            Assure that all user input is validated before submitting to back-end`,
                postdate: '4 days',
                salary: '5000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 1,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 2,
                fK_Level_Id: 1
            }, {
                id: 8,
                title: 'Senior ASP.NET / MVC',
                description: `
             Ability to collaborate closely with UX designers, UI developers, copywriters, and Business Analysts.
            Ability to translate the UX designers’ visions and user journeys into reality
             with immpressive and attractive designes keeping in mind the industry’s standards.
            Ability to present and defend your design decisions. All your design decisions
            should be based on the overall design roadmap as well as your own design thinking and fundamental`,
                requirements: `Bachelor’s degree in Computer Science or a related discipline.
            Good Experience in VS 2013, VS 2017.
            Good Experience of ASP.NET MVC, Web APIs.
            Good Experience of ORM tools like Entity framework.
            Robust knowledge of Frontend Development (HTML5, CSS3, JavaScript, JSON, Bootstrap, Responsive Designs).
            Proficiency writing SQL queries, Stored Procedures, Triggers, and relational database concepts.
            Strong understanding of OOP principles and enterprise design patterns.
            Good Knowledge of Angular.`,
                responsabilities: 'bla2 bla2',
                postdate: '2 days',
                salary: '2000',
                RequiredSkills: [...this.skills],
                isDeleted: false,
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 1,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 1,
                fK_Level_Id: 2
            },
            {
                id: 9,
                title: 'UI / Web Designer',
                description: `Ability to collaborate closely with UX designers, UI developers, copywriters, and Business Analysts.
             Ability to translate the UX designers’ visions and user journeys into reality
              with immpressive and attractive designes keeping in mind the industry’s standards.
             Ability to present and defend your design decisions. All your design decisions
             should be based on the overall design roadmap as well as your own design thinking and fundamental `,
                requirements: `3+ years of experience and proven track record.
             Professioncy working for both web and mobile design and strong UX understanding of diﬀerent platforms.
             Strong portfolio to be presented and defended during interview.
             Proﬁciency using tools such as Photoshop, Illustrator, and other designing tools.
             Basic understanding of HTML5, CSS3, and Javascript.
             Creative ideas with problem solving mindset.`,
                responsabilities: `Entry Level · 1+ Yrs of Exp · UI · UX · Web Development
             · Web Design · Information Technology (IT) · HTML5 · CSS3 · CSS · LESS · SASS `,
                postdate: '4 days',
                salary: '4000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 2,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 2,
                fK_Level_Id: 2
            }, {
                id: 10,
                title: 'Senior ASP.NET / MVC',
                description: `
            Ability to collaborate closely with UX designers, UI developers, copywriters, and Business Analysts.
             Ability to translate the UX designers’ visions and user journeys into reality
              with immpressive and attractive designes keeping in mind the industry’s standards.
             Ability to present and defend your design decisions. All your design decisions
             should be based on the overall design roadmap as well as your own design thinking and fundamental`,
                requirements: `Bachelor’s degree in Computer Science or a related discipline.
            Good Experience in VS 2013, VS 2017.
            Good Experience of ASP.NET MVC, Web APIs.
            Good Experience of ORM tools like Entity framework.
            Robust knowledge of Frontend Development (HTML5, CSS3, JavaScript, JSON, Bootstrap, Responsive Designs).
            Proficiency writing SQL queries, Stored Procedures, Triggers, and relational database concepts.
            Strong understanding of OOP principles and enterprise design patterns.
            Good Knowledge of Angular.`,
                responsabilities: 'bla2 bla2',
                postdate: '2 days',
                salary: '2000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 1,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 1,
                fK_Level_Id: 1
            },
            {
                id: 11,
                title: 'UI / Web Designer',
                description: `Ability to collaborate closely with UX designers, UI developers, copywriters, and Business Analysts.
             Ability to translate the UX designers’ visions and user journeys into reality
              with immpressive and attractive designes keeping in mind the industry’s standards.
             Ability to present and defend your design decisions. All your design decisions
             should be based on the overall design roadmap as well as your own design thinking and fundamental `,
                requirements: `3+ years of experience and proven track record.
             Professioncy working for both web and mobile design and strong UX understanding of diﬀerent platforms.
             Strong portfolio to be presented and defended during interview.
             Proﬁciency using tools such as Photoshop, Illustrator, and other designing tools.
             Basic understanding of HTML5, CSS3, and Javascript.
             Creative ideas with problem solving mindset.`,
                responsabilities: `Entry Level · 1+ Yrs of Exp · UI · UX · Web Development
             · Web Design · Information Technology (IT) · HTML5 · CSS3 · CSS · LESS · SASS `,
                postdate: '4 days',
                salary: '4000',
                isDeleted: false,
                RequiredSkills: [...this.skills],
                fK_Currency_Id: 1,
                fK_Enterprise_Id: 2,
                fK_Branch_Id: 1,
                fK_VacancyType_Id: 2,
                fK_Level_Id: 2
            },
        ];
    }
    public getAllWithOrNo() {
        return this.http.get(this.UrlApigetAllWithOrNo);
    }
    public getAll() {
        return this.http.get(this.UrlApiGetAll);
    }
    public getNotDeleted() {
        return this.http.get(this.UrlApiGetAll);}

    // public getSimilarVacancy(title: string) {
    //     return  this.vacanciesChanged.startWith(this.getAllNotDeleted().filter(a => a.title == title));
    // }

    public getById(id: number) {
        return this.http.get(this.UrlApiGetById + id);
    }

    public getByIdstatic(id: number) {
        return this.vacancies.filter(a => a.id == id)[0];
    }

    public deletev(id: number) {
        return  this.http.delete(this.UrlApiDelete + id);
        //  return thstaticis.getAll();
    }
    public addVacancy(v: Vacancy) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Host': 'localhost:49877',
                'Content-Type': 'application/json'
            })};
        return this.http.post('http://localhost:49877/rpc/vacancies/PostVacancy', v, httpOptions );
    }
    public updateVacancy(id: number, v: Vacancy) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })};
        // this.getById(id).subscribe(
        //     (data: Vacancy) => {
        //             this.vac = data ;
        //             this.vac.postdate = v.postdate;
        //             this.vac.requirements = v.requirements;
        //             this.vac.responsabilities = v.responsabilities;
        //             this.vac.salary = v.salary;
        //             this.vac.title = v.title;
        //             this.vac.description = v.description;
        //             this.vacancies.push(this.vac);
        //         });
            return    this.http.put(`http://localhost:49877/api/Vacancies/PutVacancy`, [id , v], httpOptions);

    }
    public getUserVacancies(id: number): Vacancy[] {
        // call function from back end to get by user ID
        return this.vacancies.filter(res => res.isDeleted === false).slice(0, 4);
    }

    public getByEnterpriseId(eId: number): Vacancy[] {
        const enterpriseVacancies: Vacancy[] = [];
        for (let i = 0; i < this.vacancies.length; i++) {
            if (this.vacancies[i].fK_Enterprise_Id === eId) {
                enterpriseVacancies.push(this.vacancies[i]);
            }
        }
        return enterpriseVacancies;
    }
    public getVacanciesByEnterpriseId(eId: number) {
        return this.http.get(this.UrlApiGetVacanciesByEnterpriseId + eId);
    }
}
