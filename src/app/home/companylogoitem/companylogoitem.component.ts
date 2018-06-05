import { Component, OnInit, Input } from '@angular/core';
import { ILogo } from 'src/app/shared/interfaces/ILogo';

@Component({
  selector: 'app-companylogoitem',
  templateUrl: './companylogoitem.component.html',
  styleUrls: ['./companylogoitem.component.css']
})
export class CompanylogoitemComponent implements OnInit {
@Input() companylogoitem :ILogo
  constructor() { }

  ngOnInit() {
  }

}
