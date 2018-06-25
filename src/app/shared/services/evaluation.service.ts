import { Injectable } from '@angular/core';
import { Evaluation } from '../classes/Evaluation.model';
import { User } from '../../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  evaluation:Evaluation[]=[];
  
  constructor() { }

  public getEvaluationByUserId(id:number){
    return this.evaluation.filter(a=>a.user_id == id);
  }
  public AddEvaluation(evaluation:Evaluation){
    this.evaluation.push(evaluation);
  }
  public delete(){

  }
  public update(){

  }
  
}
