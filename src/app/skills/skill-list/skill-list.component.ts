import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { Skill } from '../../shared/classes/skill.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  constructor(private skillsService: SkillsService , private route: ActivatedRoute) {
    // this.skillsNo = this.skillsList.length;
    if (this.id == null) {
      this.skillsList = skillsService.getAll();
    } else {  this.skillsList = skillsService.getAllByPathID(this.id); }
   }
   skillsList: Skill[];
   skillsNo;
  // pathSkillsList;
  id;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

}
