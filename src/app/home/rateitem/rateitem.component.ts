import { Component, OnInit } from '@angular/core';
import { IRate } from 'src/app/shared/interfaces/IRate';
import { Input } from '@angular/core';


@Component({
  selector: 'app-rateitem',
  templateUrl: './rateitem.component.html',
  styleUrls: ['./rateitem.component.css']
})
export class RateitemComponent implements OnInit {
  @Input() rateitem :IRate
  
  constructor() { }

  ngOnInit() {
  }

}
