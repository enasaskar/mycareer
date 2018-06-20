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


  rate = 3;

  constructor(private skillsService: SkillsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    // this.skillsNo = this.skillsList.length;
    if (this.id == null) {
      this.oneItemToshow = true;
      this.skillsList = skillsService.getAll();
      console.log('by skill id');
    } else {
      this.oneItemToshow = false;
      this.skillsList = skillsService.getAllByPathID(this.id);
      console.log(this.id + 'inside by path id ');
    }
  }
  skillsList: Skill[];
  skillsNo;
  oneItemToshow;
  // pathSkillsList;
  id;

  ngOnInit() {
  }


}
