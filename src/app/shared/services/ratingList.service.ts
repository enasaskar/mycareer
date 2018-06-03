import { RatingList } from "../classes/ratingList";


export class RatingListService{

    private ratings : RatingList[] = [
        {
            icon : '../../assets/img/company-workers.png',
            name : 'Environment'
        },
        {
            icon : '../../assets/img/company-workers.png',
            name : 'Environment'
        },
        {
            icon : '../../assets/img/company-workers.png',
            name : 'Environment'
        },
        {
            icon : '../../assets/img/company-workers.png',
            name : 'Environment'
        }
    ];

    public getAll() : RatingList[]
    {
        return this.ratings;
    }
}