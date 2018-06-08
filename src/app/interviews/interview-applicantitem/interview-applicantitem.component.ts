import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-interview-applicantitem',
  templateUrl: './interview-applicantitem.component.html',
  styleUrls: ['./interview-applicantitem.component.css']
})
export class InterviewApplicantitemComponent implements OnInit {
  modalRef: BsModalRef;

  max = 10;
  rate = [0, 0, 0, 0];
  isReadonly = false;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }
  ngOnInit() {
  }

}
