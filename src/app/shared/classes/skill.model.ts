export class Skill {

    ID?: number;
    Name?: string;
    IsDeleted?: boolean;
    Img?: string;
    from?: string;
    paths?: string;
    vacancy?: string;
    Level?: string;
    NoEndorsments?: number;
    Description ?: string;
    Rate ?: number;
    Review ?: string;
    acquiredDat?: string ;
    // acquiredDat?: DateTimeFormat ;

    constructor(id, name, isDel, img, level) {
       this.ID = id;
       this.Name = name;
       this.IsDeleted = isDel;
       this.Img = img;
       this.Level = level;
    }
}
