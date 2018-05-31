import { RatingList } from "../classes/ratingList";


export class RatingListService{

    private ratings : RatingList[] = [
        {
            icon : '../../assets/img/company-workers.png',
            name : 'Environment',
            value : 4
        }
    ];

    public getAll() : RatingList[]
    {
        return this.ratings;
    }
}