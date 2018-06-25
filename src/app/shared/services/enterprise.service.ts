import { Observable } from 'rxjs/Observable';
import { Enterprise } from './../classes/enterprise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnterpriseDetails } from '../classes/enterprise-details';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserRatingsService } from './user-ratings.service';
import { RatingList } from '../classes/ratingList';

@Injectable({
    providedIn: 'root'
  })
export class EnterpriseService {

    public onDelete = new Subject();


    private enetrprises: Enterprise[] = [
        {
            id : 2,
            name : 'Vodafone',
            headline : 'Telecommunications',
            logo : '../assets/img/logos/vodafone.png',
            des : `Every great brand stands for something and at Vodafone we exist to connect everybody to live a better today and build a better tomorrow. At Vodafone, our people live the brand.

            Working at Vodafone is all about helping people feel ready to benefit from new technology. We bring the future to even the most remote places, using technology to help families in disaster zones, showing young people that a phone is not just for fun and thinking about technology that doesn’t even exist yet. 
            
            Over 30 years ago, we made the first ever mobile phone call and sent the first SMS in Britain and have been changing the lives of billions of people ever since. We are taking 4G to the Moon and using big data for social good to intelligent transport systems and emergency drones, we are still shaking things up.`,
            headquarters : 'USA'
        },

        {
            id : 1,
            name : 'ITWORX',
            headline : 'Cloud',
            logo : '../assets/img/logos/itworx.jpg',
            des : `ITWORX is a global IT Services firm providing Cloud-based and On-premise solutions to the world's leading organizations with an emphasis on Advanced Analytics, Enterprise Mobility, Performance Management, and CRM. ITWORX has a 20-year proven track record building award-winning solutions for Telco, Banking, Manufacturing, Agriculture, and Government; leveraging its vast pool of talent, wide range of partnerships, and global delivery capability. 

            ITWORX has global offices in Cairo, Connecticut, Toronto, London, Zurich, Riyadh, Dubai, Abu Dhabi, Kuwait, & Doha. 
            `,
            headquarters : 'Egypt'
        },
        {
            id: 3,
            name: 'Information Technology Institute',
            headline : 'Education',
            logo: '../../../assets/img/logos/images.jpg',
            des :`Information Technology Institute is a pioneering national institute with a regional influence and international linkage. Since it was established in 1993, ITI has been devoted to provide a large pool of promising youth with world-class human capacity building programs and empirical learning approach to profoundly scale up the impact of the aspiring Egyptian youth in the ICT workplace. While moving to a future where everyone is acquainted with technology and is capable to contribute in shaping the future of the ICT industry, the ITI provides Egyptians from 12 year olds till 60 year olds with the needed support. It offers Egyptians free scholarships and training in the different areas of the market.`,
            headquarters : 'Egypt'
        },
        {
            id: 4,
            name: 'Valeo',
            headline : 'Automative',
            logo: '../../../assets/img/logos/Valeo_Logo.svg.png',
            
            des : `Valeo is an automotive supplier, partner to all automakers worldwide. As a technology company, Valeo proposes innovative products and systems that contribute to the reduction of CO2 emissions and to the development of intuitive driving. 

            In 2017, the Group generated sales of 18.6 billion euros and invested over 19% of its original equipment sales in Research and Development. Valeo has 184 plants, 55 Research and Development centers and 15 distribution platforms, and employs 111,600 people in 33 countries worldwide. `,
            headquarters : 'Egypt'
        },
        {
            id: 5,
            name: 'Sunrise Language School',
            headline: 'Education',
            logo: '../../../assets/img/school.png',
            
            des: 'Sunrise Language School founded in 1984 is a huge enterprise which provides educational services for students from all over egypt',
            headquarters: 'Egypt'
        },
        {
            id: 6,
            name: 'Ain Shams University',
            headline: 'Education',
            logo: '../../../assets/img/school.png',
            des: 'Ain Shams University founded in 1884 is a huge enterprise which provides educational services for students from all over egypt',
            headquarters: 'Egypt'
        }

    ];

    constructor(private userRatingService: UserRatingsService, private http : HttpClient) {

    }

    private enterprisesDetails: EnterpriseDetails[] = [{
        id : 2,
        name : 'Vodafone',
        headLine : 'Telecommunications',
        headquarters : 'USA',
        bigLogo : '../assets/img/vodafone.png',
        smallLogo : '../assets/img/logos/vodafone.png',
        des : `Every great brand stands for something and at Vodafone we exist to connect everybody to live a better today and build a better tomorrow. At Vodafone, our people live the brand.

        Working at Vodafone is all about helping people feel ready to benefit from new technology. We bring the future to even the most remote places, using technology to help families in disaster zones, showing young people that a phone is not just for fun and thinking about technology that doesn’t even exist yet. 
        
        Over 30 years ago, we made the first ever mobile phone call and sent the first SMS in Britain and have been changing the lives of billions of people ever since. We are taking 4G to the Moon and using big data for social good to intelligent transport systems and emergency drones, we are still shaking things up.
        `,
        size : '300+',
        website : 'www.vodafone.com',
        facebookAccount: '',
        twitterAccount: '',
        profileViewsNumber: 200,
        reviewsTotalNumber : 100,
        applicatntsNumber : 100,
        branches : [
            {
                country :{ id : 1,
                    name : 'Egypt',
                    cities : [
                        {
                            id : 1,
                            name : 'Cairo',
                            countryId : 1,
                            countryName : 'Egypt'
                          },
                          {
                            id : 2,
                            name : 'Alex',
                            countryId : 1,
                            countryName : 'Egypt'
                          },
                          {
                            id : 3,
                            name : 'Giza',
                            countryId : 1,
                            countryName : 'Egypt'
                          }
                    ]},
                city : {id : 1,
                    name : 'Cairo',
                    countryId : 1,
                countryName:'Egypt'},
                locationDetails : 'blah blah blah'
            },
            {
                country : { id : 1,
                    name : 'Egypt',
                    cities : [
                        {
                            id : 4,
                            name : 'New York',
                            countryId : 2,
                            countryName : 'USA'
                          },
                          {
                            id : 5,
                            name : 'Denver',
                            countryId : 2,
                            countryName : 'USA'
                          },
                    ]},
                city :{id : 2,
                    name : 'Giza',
                    countryId : 1,
                    countryName:'Egypt'},
                locationDetails : 'blah blah'
            }


        ]
        },
        {
        id : 1,
        name : 'ITWorkX',
        headLine : 'Cloud',
        headquarters : 'Egypt',
        bigLogo : '../assets/img/logos/itworx.jpg',
        des : `ITWORX is a global IT Services firm providing Cloud-based and On-premise solutions to the world's leading organizations with an emphasis on Advanced Analytics, Enterprise Mobility, Performance Management, and CRM. ITWORX has a 20-year proven track record building award-winning solutions for Telco, Banking, Manufacturing, Agriculture, and Government; leveraging its vast pool of talent, wide range of partnerships, and global delivery capability. 

        ITWORX has global offices in Cairo, Connecticut, Toronto, London, Zurich, Riyadh, Dubai, Abu Dhabi, Kuwait, & Doha. 
        `,
        size : '100-200',
        website : '',
        facebookAccount: '',
        twitterAccount: '',
        profileViewsNumber: 200,
        reviewsTotalNumber : 100,
        applicatntsNumber : 100
        }
];

    public getAllDetails(): EnterpriseDetails[] {
        return this.enterprisesDetails;
    }

    // public getAll(): Enterprise[] {
    //     return this.enetrprises;
    // }

    public getAll(){
        return this.http.get('http://localhost:49877/rpc/Enterprises/GetAll?searchInput=%20&type=json');
    }

    public add(enterprise: EnterpriseDetails) {
        //this.enterprisesDetails.push(enterprise);
        console.log(enterprise.branches);
        const url = 'http://localhost:49877/rpc/Enterprises/PostEnterprise';
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })};
        return this.http.post(url,enterprise,httpOptions);
    }

    public getByIdStatic(id: number) {
        for (let i = 0 ; i < this.enterprisesDetails.length ; i++) {
            if (this.enterprisesDetails[i].id === id) {
                return this.enterprisesDetails[i];
            }
        }
    }
    public getById(id : number):Observable<EnterpriseDetails>{
        return <Observable<EnterpriseDetails>>this.http.get(`http://localhost:49877/rpc/Enterprises/GetEnterprise/${id}?type=json`);
    }

    public getEnterpriseById(id: number) {
        for (let i = 0 ; i < this.enetrprises.length ; i++) {
            if (this.enetrprises[i].id == id) {
                return this.enetrprises[i];
            }
        }
    }
    public getByName (name: string): Enterprise {
        let enterprise: Enterprise;
        this.enetrprises.map( item => {
            if (item.name === name) {
                enterprise = item;
            }
        });
        return enterprise;
    }

    public delete(enterprise: Enterprise) {
        const index = this.enetrprises.indexOf(enterprise);
        this.enetrprises.splice(index, 1);
    }

    public update(id: number, e: EnterpriseDetails) {
        this.enterprisesDetails[id] = e;
        //console.log(e.branches);
        // const url = `http://localhost:49877/rpc/Enterprises/PutEnterprise/${id}`;
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type':  'application/json'
        //     })};
        // return this.http.put(url,e,httpOptions);
    }

    public getRatingItem(ratingList: RatingList[], id: number) {
            return ratingList.find(a => a.id === id);
    }

    public getRatingAvg(id: number) {
        return this.userRatingService.getAll().filter(a => a.enterpriesId === id);
    }
}
