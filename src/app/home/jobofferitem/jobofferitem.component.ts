import { Component, OnInit } from '@angular/core';
import { IOffer } from 'src/app/shared/interfaces/IOffer';
import { Input } from '@angular/core';

@Component({
  selector: 'app-jobofferitem',
  templateUrl: './jobofferitem.component.html',
  styleUrls: ['./jobofferitem.component.css']
})
export class JobofferitemComponent implements OnInit {
@Input() jobofferitem :IOffer
  constructor() { }

  ngOnInit() {
  }

}
