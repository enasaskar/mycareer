import { Component, OnInit, Input} from '@angular/core';
import { IService } from 'src/app/shared/interfaces/IService';

@Component({
  selector: 'app-servicesitem',
  templateUrl: './servicesitem.component.html',
  styleUrls: ['./servicesitem.component.css']
})
export class ServicesitemComponent implements OnInit {
@Input() servieitem:IService;
  constructor() { }

  ngOnInit() {
    
  }

}
