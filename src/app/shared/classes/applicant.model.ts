import { User } from "../../users/users.model";
import { Vacancy } from "./vacancy.model";

export class Applicant {

    user:User;
    vacancy:Vacancy;
    status?:boolean;

    constructor(user:User,vacancy:Vacancy){
        this.user = user;
        this.vacancy = vacancy;
    }
}