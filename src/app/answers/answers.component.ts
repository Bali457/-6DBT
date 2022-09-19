import { Component,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Answer } from './Answer';
import { YService}  from './y.service';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})


export class AnswersComponent implements OnInit {

  title = '';
  title1 = '';
  ans:Answer;
 x:number;
 y:number;
 z:string;
  
 private firstObsSubscription: Subscription;
 
  constructor(private ser:YService,private route:ActivatedRoute)
  {
    
    
  }

  fetchAnswers(qid:any)
  { let qi=this.qid
   // this.prio =this.prio + 1

    this.ser.f3(qi).subscribe(
      (data:any)=>{ 
        
        console.log(data[0].qid +"data got from server");
        this.ans =data;}
    
    ,(error)=>{this.title = JSON.stringify(error); });

  }


  enterAnswer()
  {

    if(this.z != null && this.z != '')
    {
    let ix =new Answer();
    ix.qid =this.qid;
    ix.aid =this.y;
    ix.answer=this.z;
    

    this.ser.f4(ix).subscribe(
      (data:any)=>{ 
        
        console.log("your question with"+data.qid+"has been submitted" );
       
        this.title ="your answer has been submitted";}    
    ,(error)=>{this.title = JSON.stringify(error); });


    this.z='';

    setInterval(() => {
      this.fetchAnswers(this.qid);
        }, 2000);

    

    setInterval(() => {
      this.title='';
        }, 2000);

      }

      else{
        this.title1 ="Enter something";
        setInterval(() => {
          this.title1='';
            }, 2000);
  
    }


  }

  qid:any
  question:any
 // prio:any
  
  ngOnInit() {

   this.qid = this.route.snapshot.paramMap.get('qid');
   this.question = this.route.snapshot.paramMap.get('question');
   //this.prio = this.route.snapshot.paramMap.get('priority');

  
  //  this.firstObsSubscription = interval(1000).subscribe(count => {this.fetchAnswers(this.qid);
    
  //});

  //this.fetchAnswers(this.qid);
   
   this.fetchAnswers(this.qid);

  }

  // ngOnDestroy(): void {
  //   this.firstObsSubscription.unsubscribe();
  // }
}
