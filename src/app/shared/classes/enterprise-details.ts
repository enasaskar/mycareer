import { EnterpriseBranches } from './enterprise-branches';
// import { Sizes } from './sizes';
export class EnterpriseDetails {
    id : number;
    name : string;
    headLine : string;
    des : string;
    bigLogo? : string;
    headquarters : string;
    size? : string;
    website: string;
    facebookAccount:string;
    twitterAccount : string;
    profileViewsNumber : number;
    reviewsTotalNumber : number;
    applicatntsNumber : number;
    branches : EnterpriseBranches[];

}
