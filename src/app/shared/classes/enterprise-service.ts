import { Enterprise } from './enterprise';
import { EnterpriseDetails } from './enterprise-details';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class EnterpriseService {

    // public onDelete = new EventEmitter<Enterprise>();

    public onDelete = new Subject();


    private enetrprises : Enterprise[] = [
        {
            id : 1,
            name : 'Vodafone',
            logo : '../assets/images/vodafone-icon.png',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'USA'
        },

        {
            id : 2,
            name : 'ITWORX',
            logo : '../assets/images/ITWORX.jpg',
            des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            headquarters : 'Egypt'
        },

    ];

    private enterprisesDetails : EnterpriseDetails[] = [{
        id : 1,
        name : 'Vodafone',
        headLine : 'Telecommunications',
        headquarters : 'USA',
        bigLogo : '../assets/images/vodafone.png',
        des :'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        size : 300,
        website :'www.vadafone.com'
        },{
        id : 2,
        name : '',
        headLine : '',
        headquarters : '',
        bigLogo : '',
        des :'',
        //size : '',
        website :''
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

}
