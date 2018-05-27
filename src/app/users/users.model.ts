export class User {
  public imagePath: string;
  public fname: string;
  public lname: string;
  public title: string;
  // swap this with object from enterprise when available
  public enterpriseName: string;
  public email: string;
  public telNumber: string;
  public district: string;
  public country: string;
  public city: string;
  public description: string;
  public interests: string[];

  constructor(imagePath: string, fname: string, lname: string, title: string, enterpriseName: string,
     email: string, telNumber: string, district: string, country: string, city: string, description: string,
     interests: string[]) {
       this.imagePath = imagePath;
       this.fname = fname;
       this.lname = lname;
       this.title = title;
       this.enterpriseName = enterpriseName;
       this.email = email;
       this.telNumber = telNumber;
       this.district = district;
       this.country = country;
       this.city = city;
       this.description = description;
       this.interests = interests;
    }
  }
