import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { OperatingSystemQuestionsComponent } from './operating-system-questions/operating-system-questions.component';
import { CPlusplusQuestionsComponent } from './c-plusplus-questions/c-plusplus-questions.component';
import { DotNetQuestionsComponent } from './dot-net-questions/dot-net-questions.component';
import { DataStructureQuestionsComponent } from './data-structure-questions/data-structure-questions.component';
import { CoreJavaQuestionsComponent } from './core-java-questions/core-java-questions.component';
import { AdvanceJavaQuestionsComponent } from './advance-java-questions/advance-java-questions.component';
import { MeanStackQuestionsComponent } from './mean-stack-questions/mean-stack-questions.component';
import { SoftwareEngineeringQuestionsComponent } from './software-engineering-questions/software-engineering-questions.component';
import { AdvancedWebProgrammingQuestionsComponent } from './advanced-web-programming-questions/advanced-web-programming-questions.component';
import { DatabaseTechnologyQuestionsComponent } from './database-technology-questions/database-technology-questions.component';


import { AnswersComponent } from './answers/answers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DashboardComponent } from './student/dashboard/dashboard.component';


const routes: Routes = [
   
      {path:'',redirectTo:"/home",pathMatch:"full"},
      {path:'home', component:HomeComponent,},
       
      {path:'OperatingSystemQuestions/:mid',component:OperatingSystemQuestionsComponent},
      {path:'CPlusplusQuestions/:mid',component:CPlusplusQuestionsComponent},
      {path:'DotNetQuestions/:mid',component:DotNetQuestionsComponent},
      {path:'DataStructureQuestions/:mid',component:DataStructureQuestionsComponent},
      {path:'CoreJavaQuestions/:mid',component:CoreJavaQuestionsComponent},
      {path:'AdvanceJavaQuestions/:mid',component:AdvanceJavaQuestionsComponent},
      {path:'MeanStackQuestions/:mid',component:MeanStackQuestionsComponent},
      {path:'SoftwareEngineeringQuestions/:mid',component:SoftwareEngineeringQuestionsComponent},
      {path:'AdvancedWebProgrammingQuestions/:mid',component:AdvancedWebProgrammingQuestionsComponent},
      {path:'DatabaseTechnologyQuestions/:mid',component:DatabaseTechnologyQuestionsComponent},
        
      {path:'answers/:qid/:question',component:AnswersComponent},



      
      {path:'**',component:PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
