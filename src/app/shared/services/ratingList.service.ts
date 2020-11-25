import { RatingList } from "../classes/ratingList";


export class RatingListService{

    private ratings : RatingList[] = [
        {
            id : 1,
            icon : '../../assets/img/company-workers.png',
            name : 'Environment'
        },
        {
            id : 2,
            icon : '../../assets/img/workplace.png',
            name : 'Workplace'
        },
        {
            id : 3,
            icon : '../../assets/img/appreciation.png',
            name : 'Appreciation'
        },
        {
            id : 4,
            icon : '../../assets/img/cv.png',
            name : 'Experience'
        }
    ];

    public getAll() : RatingList[]
    {
        return this.ratings;
    }
}