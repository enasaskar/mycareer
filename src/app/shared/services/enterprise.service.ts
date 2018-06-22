import { Sizes } from '../classes/sizes';
import { Enterprise } from '../classes/enterprise';
import { EnterpriseDetails } from '../classes/enterprise-details';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RatingModal } from '../classes/rating.modal';
import { UserRatingsService } from './user-ratings.service';
import { RatingList } from '../classes/ratingList';

@Injectable({
    providedIn: 'root'
  })
export class EnterpriseService {

    public onDelete = new Subject();


    private enetrprises: Enterprise[] = [
        {
            id : 1,
            name : 'Vodafone',
            headline : 'Telecommunications',
            logo : '../assets/img/logos/vodafone.png',
            des : `Every great brand stands for something and at Vodafone we exist to connect everybody to live a better today and build a better tomorrow. At Vodafone, our people live the brand.

            Working at Vodafone is all about helping people feel ready to benefit from new technology. We bring the future to even the most remote places, using technology to help families in disaster zones, showing young people that a phone is not just for fun and thinking about technology that doesn’t even exist yet. 
            
            Over 30 years ago, we made the first ever mobile phone call and sent the first SMS in Britain and have been changing the lives of billions of people ever since. We are taking 4G to the Moon and using big data for social good to intelligent transport systems and emergency drones, we are still shaking things up.
            
            
            We believe being different is good. We’re proud to offer equal opportunities regardless of race, nationality, cultural background, gender, age, marital status, sexual orientation, gender identity, disability, religious or political belief.
            We can only leverage this diversity by building an inclusive culture where everyone is respected, can be themselves and strive to be their best. Your different perspectives help us to shape the future.
            
            No matter where you are, the way we see the future binds us together. We want our people to be at the top of their game by giving them the freedom and the opportunities to make a difference. We want our people to be pioneers, by adopting new technologies and being excited about the future. 
            `,
            headquarters : 'USA'
        },

        {
            id : 2,
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
            des: 'Sunrise Language School founded in 1984 is ......etc',
            headquarters: 'Egypt'
        },
        {
            id: 6,
            name: 'Ain Shams University',
            headline: 'Education',
            logo: '../../../assets/img/school.png',
            des: 'Ain Shams University founded in 1884 is ......etc',
            headquarters: 'Egypt'
        }

    ];

    constructor(private userRatingService: UserRatingsService) {

    }

    private enterprisesDetails: EnterpriseDetails[] = [{
        id : 1,
        name : 'Vodafone',
        headLine : 'Telecommunications',
        headquarters : 'USA',
        bigLogo : '../assets/img/vodafone.png',
        smallLogo : '../assets/img/logos/vodafone.png',
        des : `Every great brand stands for something and at Vodafone we exist to connect everybody to live a better today and build a better tomorrow. At Vodafone, our people live the brand.

        Working at Vodafone is all about helping people feel ready to benefit from new technology. We bring the future to even the most remote places, using technology to help families in disaster zones, showing young people that a phone is not just for fun and thinking about technology that doesn’t even exist yet. 
        
        Over 30 years ago, we made the first ever mobile phone call and sent the first SMS in Britain and have been changing the lives of billions of people ever since. We are taking 4G to the Moon and using big data for social good to intelligent transport systems and emergency drones, we are still shaking things up.
        
        
        We believe being different is good. We’re proud to offer equal opportunities regardless of race, nationality, cultural background, gender, age, marital status, sexual orientation, gender identity, disability, religious or political belief.
        We can only leverage this diversity by building an inclusive culture where everyone is respected, can be themselves and strive to be their best. Your different perspectives help us to shape the future.
        
        No matter where you are, the way we see the future binds us together. We want our people to be at the top of their game by giving them the freedom and the opportunities to make a difference. We want our people to be pioneers, by adopting new technologies and being excited about the future. 
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
                      'Cairo','Giza','Alex'
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
                      'Cairo','Giza','Alex'
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
        id : 2,
        name : 'ITWorkX',
        headLine : 'Cloud',
        headquarters : 'Egypt',
        bigLogo : '',
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

    public getAll(): Enterprise[] {
        return this.enetrprises;
    }

    public add(enterprise: EnterpriseDetails) {
        this.enterprisesDetails.push(enterprise);
    }

    public getById(id: number) {
        for (let i = 0 ; i < this.enterprisesDetails.length ; i++) {
            if (this.enterprisesDetails[i].id === id) {
                return this.enterprisesDetails[i];
            }
        }
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

    public update(i: number, e: EnterpriseDetails) {
        this.enterprisesDetails[i] = e;
    }

    public getBySearchWord(searchWord: string) {
        let enterprises = [];
        if (searchWord.length > 0 ) {
            enterprises = this.getAll().filter(a => a.name.toLowerCase().includes(searchWord.toLowerCase()));
          } else {
            enterprises = this.getAll();
          }

          return enterprises;
    }

    public getRatingItem(ratingList: RatingList[], id: number) {
            return ratingList.find(a => a.id === id);
    }

    public getRatingAvg(id: number) {
        return this.userRatingService.getAll().filter(a => a.enterpriesId === id);
    }
}
