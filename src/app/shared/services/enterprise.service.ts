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
            logo : '../assets/img/logos/vodafone.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'USA'
        },

        {
            id : 2,
            name : 'ITWORX',
            logo : '../assets/img/logos/itworx.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 3,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 4,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 5,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id : 6,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id: 7,
            name: 'Information Technology Institute',
            logo: '../../../assets/img/school.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id: 8,
            name: 'Engineering Ain Shams University',
            logo: '../../../assets/img/school.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },
        {
            id: 9,
            name: 'Al-Farouk Language School',
            logo: '../../../assets/img/school.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
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
        des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name : '',
        headLine : '',
        headquarters : '',
        bigLogo : '',
        des : '',
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
