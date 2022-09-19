import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { YService}  from './y.service';
import { Question } from './Question';


@Component({
  selector: 'app-data-structure-questions',
  templateUrl: './data-structure-questions.component.html',
  styleUrls: ['./data-structure-questions.component.css']
})
export class DataStructureQuestionsComponent implements OnInit {

  title ='';
  title1='';
  mid:any
  ques:Question;
  textboxvalue:string
  

  constructor(private ser:YService,private route:ActivatedRoute)
  {
    
  }

  fetchQuestions()
  {
    
    this.ser.fetchQues(this.mid).subscribe(
      (data:any)=>{ 
        
        console.log(data[0].qid +"data got from server");
        
        this.ques =data;
      }
    
    ,(error)=>{this.title = JSON.stringify(error); });

  }


  enterQuestion()
  {

    if(this.textboxvalue != null && this.textboxvalue != ''){
      
      let question =new Question();

          question.mid =this.mid;
          question.question=this.textboxvalue;


      this.ser.enterQues(question).subscribe(
        (data:any)=>{ 
        
        console.log("your question with qid no " +data.qid+ " has been submitted" );

        this.title ="your question has been submitted";
        
        }  

       ,(error)=>{this.title = JSON.stringify(error); 

      });

      this.textboxvalue='';


      setInterval(() => {
        this.fetchQuestions();
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


  ngOnInit() {

    this.mid = this.route.snapshot.paramMap.get('mid');
    this.fetchQuestions();
  }


}
