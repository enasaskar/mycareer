import { Sizes } from '../classes/sizes';
import { Enterprise } from '../classes/enterprise';
import { EnterpriseDetails } from '../classes/enterprise-details';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class EnterpriseService {

    // public onDelete = new EventEmitter<Enterprise>();

    public onDelete = new Subject();


    private enetrprises : Enterprise[] = [
        {
            id : 1,
            name : 'Vodafone',
            logo : '../assets/img/vodafone-icon.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'USA'
        },

        {
            id : 2,
            name : 'ITWORX',
            logo : '../assets/img/ITWORX.jpg',
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
        }

    ];

    private enterprisesDetails : EnterpriseDetails[] = [{
        id : 1,
        name : 'Vodafone',
        headLine : 'Telecommunications',
        headquarters : 'USA',
        bigLogo : '../assets/img/vodafone.png',
        des :'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        size : "300+",
        website :'www.vodafone.com',
        facebookAccount:'',
        twitterAccount:''
        },
        {
        id : 2,
        name : '',
        headLine : '',
        headquarters : '',
        bigLogo : '',
        des :'',
        size : '100-200',
        website :'',
        facebookAccount:'',
        twitterAccount:''
        }
];

    public getAllDetails() : EnterpriseDetails[]
    {
        return this.enterprisesDetails;
    }

    public getAll() : Enterprise[]
    {
        return this.enetrprises;
    }

    public add(enterprise : EnterpriseDetails)
    {
        this.enterprisesDetails.push(enterprise);
    }

    public getById(id : number)
    {
        for(let i = 0 ; i < this.enterprisesDetails.length ; i++)
        {
            if(this.enterprisesDetails[i].id == id)
            {
                return this.enterprisesDetails[i];
            }
        }
    }

    public delete(enterprise : Enterprise)
    {
        const index = this.enetrprises.indexOf(enterprise);
        this.enetrprises.splice(index,1);
        console.log(this.enetrprises);
    }

    public update(i : number, e : EnterpriseDetails){
        this.enterprisesDetails[i] = e;
    }

    public getBySearchWord(searchWord : string){
        let enterprises = []
        if(searchWord.length > 0 ){    
            enterprises = this.getAll().filter(a=> a.name.toLowerCase().includes(searchWord.toLowerCase()));
            
          }
          else{ 
            enterprises = this.getAll();       
          }

          return enterprises;
    }

}
