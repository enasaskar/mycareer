export interface IVacancy {
    id: number,
    logoImg: string,
    title: string,
    description: string,
    requirements:string,
    responsabilities:string,
    postdate: string, //date??
    salary: string,
    isDeleted: boolean,
    fK_Currency_Id: number,
    fK_Enterprise_Id: number,
    fK_Branch_Id: number,
    fK_VacancyType_Id: number,
    fK_Level_Id: number

}