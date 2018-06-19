export class User {
  public id: number;
  public imagePath?: string;
  public fname: string;
  public lname: string;
  public title?: string;
  // swap this with object from enterprise when available
  public enterpriseName?: string;
  public enterpriseId? : number;
  public email: string;
  public telNumber: string;
  public district: string;
  public country: string;
  public city: string;
  public description?: string;
  public interests?: string[];
  public username?: string;
  public password: string;
  public role?: string;

  constructor(id: number, imagePath: string, fname: string, lname: string, title: string, enterpriseName: string,
     email: string, password: string, telNumber: string, district: string, country: string, city: string, description: string,
     interests: string[]) {
       this.id = id;
       this.imagePath = imagePath;
       this.fname = fname;
       this.lname = lname;
       this.title = title;
       this.enterpriseName = enterpriseName;
       this.email = email;
       this.password = password;
       this.telNumber = telNumber;
       this.district = district;
       this.country = country;
       this.city = city;
       this.description = description;
       this.interests = interests;
    }
  
  }

