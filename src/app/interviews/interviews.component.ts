import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  modalRef: BsModalRef;
  
  max = 10;
  rate = [0,0,0,0];
  isReadonly = false;

  seeMoreAccepted = false;
  seeMorePending = false;
  
  constructor(private modalService: BsModalService) { }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }
  seeMoreAcceptedclicked(){
    this.seeMoreAccepted = !this.seeMoreAccepted;
  }
  seeMorePendingclicked(){
    this.seeMorePending = !this.seeMorePending;
  }
  ngOnInit() {
  }

}
