import { Injectable } from '@angular/core';
import { IVacancy } from '../interfaces/IVacancy';
import { Subject } from 'rxjs';

@Injectable()
export class VacancyService {

    private vacanciesFilled = new Subject<IVacancy[]>();
    private vacancies :IVacancy[]=[
        {
           id: 1,
           logoImg: "../../../assets/img/ITWORX.jpg",
           logoImgbig:"../../../assets/img/ITWORX.jpg",
           title: "Software Engineer",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
           requirements:"bla bla",
           responsabilities:"bla2 bla2",
           postdate: "2 days",
           salary: "2000",
           isDeleted: false,
           fK_Currency_Id: 1,
           fK_Enterprise_Id: 1,
           fK_Branch_Id: 1,
           fK_VacancyType_Id: 1,
           fK_Level_Id: 1
        },
        {
            id: 2,
            logoImg: "../../../assets/img/ITWORX.jpg",
            logoImgbig:"../../../assets/img/ITWORX.jpg",
            title: "Software Engineer 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            requirements:"bla bla",
            responsabilities:"bla2 bla2",
            postdate: "4 days",
            salary: "4000",
            isDeleted: false,
            fK_Currency_Id: 1,
            fK_Enterprise_Id: 1,
            fK_Branch_Id: 1,
            fK_VacancyType_Id: 2,
            fK_Level_Id: 2
        },
        {
            id: 3,
            logoImg: "../../../assets/img/ITWORX.jpg",
            logoImgbig:"../../../assets/img/ITWORX.jpg",
            title: "Software Engineer 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            requirements:"bla bla",
            responsabilities:"bla2 bla2",
            postdate: "6 days",
            salary: "4000",
            isDeleted: false,
            fK_Currency_Id: 1,
            fK_Enterprise_Id: 1,
            fK_Branch_Id: 1,
            fK_VacancyType_Id: 1,
            fK_Level_Id: 2
        },
        {
            id: 4,
            logoImg: "../../../assets/img/ITWORX.jpg",
            logoImgbig:"../../../assets/img/ITWORX.jpg",
            title: "Software Engineer 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            requirements:"bla bla",
            responsabilities:"bla2 bla2",
            postdate: "4 days",
            salary: "5000",
            isDeleted: false,
            fK_Currency_Id: 1,
            fK_Enterprise_Id: 1,
            fK_Branch_Id: 1,
            fK_VacancyType_Id: 2,
            fK_Level_Id: 1
        }

    ]
    
    public getAll():IVacancy[]
    {
      return this.vacancies.filter(res=>res.isDeleted==false);
    }
 
    public getById(id: number): IVacancy {
        return this.vacancies.find(i => i.id === id);
    }
    public deleteVacancy(i: number) {
        this.vacancies.splice(i, 1);
    }

    public addVacancy(v:IVacancy){
        this.vacancies.push(v);
    }
    public updateVacancy(id:number,v:IVacancy){
        let vac= this.vacancies.find(i=>i.id==id)
        vac.logoImg=v.logoImg;
        vac.postdate=v.postdate
        vac.requirements=v.requirements
        vac.responsabilities=v.responsabilities
        vac.salary=v.salary
        vac.title=v.title
        vac.description=v.description
        this.vacancies.push(vac)
    }

    // public getAll() : IVacancy[]
    // {
    //     return this.vacancies;
    // }

}