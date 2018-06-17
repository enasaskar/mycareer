import { Enterprise } from './../../shared/classes/enterprise';
import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../shared/services/enterprise.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.css']
})
export class EnterpriseListComponent implements OnInit {

  @Input() enterprises: Enterprise[];

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    // this.enterprises = this.enterpriseService.getAll();

  }

}

