export class Skill {

    ID?: number;
    Name?: string;
    IsDeleted?: boolean;
    Img?: string;
    Level?: string;
    NoEndorsments?: number;
    Description ?: string;
    Rate ?: number;
    Review ?: string;


    constructor(id, name, isDel, img, level) {
       this.ID = id;
       this.Name = name;
       this.IsDeleted = isDel;
       this.Img = img;
       this.Level = level;
    }
}
