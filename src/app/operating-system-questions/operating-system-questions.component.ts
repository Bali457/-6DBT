import { Component, OnInit } from '@angular/core';
import { Question } from './Question';
import { ActivatedRoute, Params } from '@angular/router';
import { YService}  from './y.service';


@Component({
  selector: 'app-operating-system-questions',
  templateUrl: './operating-system-questions.component.html',
  styleUrls: ['./operating-system-questions.component.css']
})
export class OperatingSystemQuestionsComponent implements OnInit {



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



//   title = '';
//   title1='';
//   ques:Question;
//   x:number;
//   y:string
  

//   constructor(private ser:YService,private route:ActivatedRoute)
//   {
    
//   }

//   fetchQuestions(mid:any)
//   {
//     let mi=this.mid
//     this.ser.f4(mi).subscribe(
//       (data:any)=>{ 
        
//         console.log(data[0].qid +"data got from server");
        
//         this.ques =data;}
    
//     ,(error)=>{this.title1 = "DATA NOT FOUND" });

//   }


//   enterQuestion()
//   {

//     if(this.y != null && this.y != '')
//     {
      
//       let ix =new Question();
//      ix.mid =this.mid;
//     ix.question=this.y;


//     this.ser.f3(ix).subscribe(
//       (data:any)=>{ 
        
//         console.log("your question with"+data.qid+"has been submitted" );

//         this.title ="your question has been submitted";}    
//     ,(error)=>{this.title = JSON.stringify(error); });

//     this.y='';

//     setInterval(() => {
//       this.fetchQuestions(this.mid);
//         }, 2000);

    
    
//     setInterval(() => {
//       this.title='';
//         }, 2000);
      
//     }

//     else{
//       this.title1 ="Enter something";
//       setInterval(() => {
//         this.title1='';
//           }, 2000);

//   }
// }

// mid:any
//   ngOnInit() {

//     this.mid = this.route.snapshot.paramMap.get('mid');
//     this.fetchQuestions(this.mid);
//   }


// }
