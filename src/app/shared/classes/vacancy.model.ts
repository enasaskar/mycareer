import { Enterprise } from './enterprise';

export class Vacancy {
    enterprise: Enterprise;
    title: string; // like web developer, front end developer ...etc
    level: string; // like entry level, junior , senior ...etc

    constructor(enterprise: Enterprise, title: string, level: string) {
        this.enterprise = enterprise;
        this.title = title;
        this.level = level;
    }
}
