export class UserRatings {
    userId : number;
    enterpriesId : number;
    ratingListItemId : number;
    value: number; 

    constructor(userId, enterpriesId, ratingItemId,value){
        this.userId = userId;
        this.enterpriesId = enterpriesId;
        this.ratingListItemId = ratingItemId;
        this.value = value;
    }
}
