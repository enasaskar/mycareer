import { Injectable } from '@angular/core';
import { Evaluation } from '../classes/Evaluation.model';
import { User } from '../../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  evaluation:Evaluation[]=[
    {
      applicant_id: 1,
      skill_id: 1,
      rate: 0
    },
    {
      applicant_id: 1,
      skill_id: 2,
      rate: 0
    },
    {
      applicant_id: 1,
      skill_id: 3,
      rate: 0
    },
    {
      applicant_id: 1,
      skill_id: 4,
      rate: 0
    },
    {
      applicant_id: 1,
      skill_id: 5,
      rate: 0
    }
  ];
  constructor() { }

  public getEvaluationByUserId(id:number){
    return this.evaluation.filter(a=>a.applicant_id == id);
  }
  public AddEvaluation(evaluation:Evaluation){
    this.evaluation.push(evaluation);
  }
  public delete(){

  }
  public update(){

  }
  
}
