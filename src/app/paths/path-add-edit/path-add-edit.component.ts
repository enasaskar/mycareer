import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path-add-edit',
  templateUrl: './path-add-edit.component.html',
  styleUrls: ['./path-add-edit.component.css']
})
export class PathAddEditComponent implements OnInit {

  public isEdit: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isEdit = this.route.snapshot.url[1].path === 'edit';

  }

}
