import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../../../shared/classes/vacancy.model';
import { Enterprise } from '../../../shared/classes/enterprise';
import { VacancyService } from '../../../shared/services/vacancy-service';

@Component({
  selector: 'app-vacancy-item',
  templateUrl: './vacancy-item.component.html',
  styleUrls: ['./vacancy-item.component.css']
})
export class VacancyItemComponent implements OnInit {
 @Input() vacancyitem: Vacancy;
 @Input() enterprises: Enterprise[];
 @Input() index: number;
  constructor(private vacancyService: VacancyService) { }

  ngOnInit() {
  }
  onTrashClick(id: number) {
    this.vacancyService.delete(id);
  }
}
